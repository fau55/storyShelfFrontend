import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../Services/user.service';
import Swal from 'sweetalert2';
//?firebase
import { UploadWidgetConfig, UploadWidgetOnUpdateEvent } from "@bytescale/upload-widget";
import { Storage, ref, uploadBytesResumable, getDownloadURL } from "@angular/fire/storage";
import { CommonModule } from '@angular/common';
import { UploadWidgetModule } from "@bytescale/upload-widget-angular";
import { HttpClientModule } from '@angular/common/http';
//?firebase end

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, UploadWidgetModule, HttpClientModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  userLoggedIn = false;
  userProfile!: any
  userName!: any
  userGender!: any
  userNumber!: any
  userEmail!: any


  //?firebase 
  uploadImageURL: string = '';
  showPreviewImage: boolean = false;
  fileName: string = 'Image';
  friendpic: any;
  //?firebase end

  constructor(private userService: UserService, public storage: Storage) {
    this.getUserInfo()
  }

  getUserInfo() {
    let userId = sessionStorage.getItem('userId');
    if (userId) {
      this.userService.getUserByUserId(userId).subscribe((res: any) => {
        console.log("user response", res);
        this.userProfile = res.user.profilePhoto
        this.userName = res.user.firstName + ' ' + res.user.lastName
        this.userGender = res.user.gender
        this.userNumber = res.user.phone
        this.userEmail = res.user.email
        this.userLoggedIn = true;
      })
    }

  }
  logOut() {
    Swal.fire({
      title: "Are you sure?",
      text: "You Want To Log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Log out"
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.clear()
        this.userLoggedIn = false;
        Swal.fire({
          text: "Log out Successful!!",
          icon: "success"
        });
      }
    });
  }


  //?firebase
  // image upload code, configuration and logic..
  // for more configurations visit : https://www.bytescale.com/docs/upload-widget/angular#configuration
  options: UploadWidgetConfig = {
    apiKey: "free", // Get API key: https://www.bytescale.com/get-started
    maxFileCount: 4,
    multi: false,
    mimeTypes: ["image/jpeg", "image/png"],
    showFinishButton: false,
    showRemoveButton: true,
    styles: {
      colors: {
        "active": "#e597eb",
        "error": "#808080 ",
        "primary": "#db0d63",
        "shade100": "#db0d63",
        "shade200": "#f53b88",
        "shade300": "#db0d63",
        "shade400": "#f53b88",
        "shade500": "#d3d3d3",
        "shade600": "#f53b88",
        "shade700": "#f0f0f0",
        "shade800": "#f8f8f8",
        "shade900": "#fff"
      }
    }
  };

  // ye method image upload karte hi execute honga.. aur hame image url milenga.. bytescale pe upload hongi ye image sabse pehle..
  onUpdate = ({ uploadedFiles, pendingFiles, failedFiles }: UploadWidgetOnUpdateEvent) => {
    if (uploadedFiles && uploadedFiles.length != 0) {
      this.fileName = uploadedFiles[0].originalFile.file.name;
    }
    const uploadedFileUrls = uploadedFiles.map(x => x.fileUrl).join("\n");
    this.uploadImageURL = uploadedFileUrls;
    if (this.uploadImageURL != '') {
      this.showPreviewImage = true;
      this.height = "150px";
    }
    else {
      this.showPreviewImage = false;
      this.uploadImageURL = '';
      this.height = "302px"
    }
  };
  width = "600px";
  height = "302px";
  //?firebase

  //?onclick of save saving to firebase

  onSave() {
    // this.showLoader = true
    this.convertUrlToFile(this.uploadImageURL);
  }

  uploadToFireBase(imageFile: any) {
    if (imageFile != '' && imageFile != null && imageFile.length != 0) {
      // uploading to firebase...
      const storageRef = ref(this.storage, `images/storyShelf/${imageFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, imageFile);
      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          switch (snapshot.state) {
            case 'paused':

              break;
            case 'running':

              break;
          }

        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          //comment
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            let userId = sessionStorage.getItem('userId')!
            let pic = {
              profilePhoto: downloadURL
            }
            this.userService.updateUserProfile(userId, pic).subscribe((res) => {
              console.log(res);
              if (res) {
                Swal.fire({
                  text: 'profile pic updated Successfully!!',
                  icon: 'success',
                  showConfirmButton: false,
                  timer: 2000
                })
                this.getUserInfo()

              }
            })
          });
        })
    }
  }

  convertUrlToFile(url: string) {
    fetch(url)
      .then(async response => {
        const contentType = response.headers.get('content-type')
        const blob = await response.blob()
        const file = new File([blob], this.fileName, { type: 'image/png' })
        // access file here
        this.uploadToFireBase(file);
      })
  }
  //?firebase end

}
