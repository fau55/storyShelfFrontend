import { Component } from '@angular/core';
import { ProductService } from '../../../Services/product.service';
//?firebase
import { UploadWidgetConfig, UploadWidgetOnUpdateEvent } from "@bytescale/upload-widget";
import { Storage, ref, uploadBytesResumable, getDownloadURL } from "@angular/fire/storage";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UploadWidgetModule } from '@bytescale/upload-widget-angular';
import { AnyAaaaRecord } from 'node:dns';
//?firebase end

@Component({
    selector: 'app-all-products',
    templateUrl: './all-products.component.html',
    styleUrl: './all-products.component.css',
    standalone: true,
    imports: [UploadWidgetModule, ReactiveFormsModule, FormsModule]
})
export class AllProductsComponent {

  productName: string = '';
  productPrice: number | null = null;
  productDescription: string = '';
  productCategory: string = '';
  author: string = '';
  inStock: number | null = null;
  productTag: string[] = [];


  //?firebase 
  uploadImageURL: string = '';
  showPreviewImage: boolean = false;
  fileName: string = 'Image';
  friendpic: any;
  showPreviewImages: string[] = []; // Store all uploaded image URLs for preview
  //?firebase end

  productArray: any[] = []

  // Options for dropdowns
  categories: string[] = ['Advanture', 'Science-Fiction', 'Fantasy', 'Education', 'Mystry', 'Self-Help','Contemporary', 'Romance', 'Historical-Fiction', 'Horror'];
  tags: string[] = ['New Arrival', 'Trending', 'Popular', 'Limited Edition', 'Best Seller', 'Classic'];

  constructor(private productService: ProductService, public storage: Storage) {
    this.getAllProduct()
  }

  getAllProduct() {
    this.productService.getAllProducts().subscribe((res: any) => {
      console.log(res);
      this.productArray = res.Product
    })
  }


  //?firebase
  // image upload code, configuration and logic..
  // for more configurations visit : https://www.bytescale.com/docs/upload-widget/angular#configuration
  options: UploadWidgetConfig = {
    apiKey: "free", // Replace with your actual API key
    maxFileCount: 4, // Allow a maximum of 4 files
    multi: true, // Enable multiple files
    mimeTypes: ["image/jpeg", "image/png"], // Allowed file types
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


  // ye method image upload karte hi execute honga.. aur hame image url milenga.. bytescale pe upload hongi ye image sabse showPreviewImages: string[] = []; // Store all uploaded image URLs for preview

  onUpdate = ({ uploadedFiles, pendingFiles, failedFiles }: UploadWidgetOnUpdateEvent) => {
    if (uploadedFiles && uploadedFiles.length !== 0) {
      // Update the uploaded image URLs
      this.uploadImageURL = uploadedFiles.map(x => x.fileUrl).join("\n");

      // Update the array of preview images
      this.showPreviewImages = uploadedFiles.map(file => file.fileUrl);

      if (this.uploadImageURL !== '') {
        this.showPreviewImage = true;
        this.height = "150px"; // Adjust height for preview images
      } else {
        this.showPreviewImage = false;
        this.uploadImageURL = '';
        this.height = "302px"; // Default height
      }
    }
  };


  width = "600px";
  height = "302px";
  //?firebase

  //?onclick of save saving to firebase

  onSave() {
    const productData = {
      productName: this.productName,
      authorName: this.author,
      productDescription: this.productDescription,
      productPrice: this.productPrice,
      category: this.productCategory,
      stock: this.inStock,
      tags: this.productTag.map(tag => ({ name: tag })),
      productImages: this.showPreviewImages.map(image => ({ image_url: image })),
    };

    console.log("product Data to Save :", productData);
  
    this.productService.saveProduct(productData).subscribe(
      (response : any) => {
        console.log('Product saved successfully:', response);
        alert('Product saved successfully!');
      },
      (error: AnyAaaaRecord) => {
        console.error('Error saving product:', error);
        alert('Failed to save product.');
      }
    );
  }
  

  convertUrlToFile(url: string) {
    fetch(url)
      .then(async response => {
        const contentType = response.headers.get('content-type');
        const blob = await response.blob();
        const file = new File([blob], this.fileName, { type: 'image/png' });

        // Upload the file to Firebase
        this.uploadToFireBase(file);
      });
  }

  uploadToFireBase(imageFile: any) {
    if (imageFile && imageFile !== '') {
      // Uploading to Firebase Storage
      const storageRef = ref(this.storage, `images/storyShelf/${imageFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, imageFile);

      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
        },
        (error) => {
          // Handle unsuccessful uploads
          console.error('Upload failed:', error);
        },
        () => {
          // Handle successful uploads
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            // Store the download URL if necessary
          });
        }
      );
    }
  }

  //?firebase end


}
