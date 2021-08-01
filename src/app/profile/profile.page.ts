import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Location } from "@angular/common";
import { host } from '../../environments/environment';
import { image_path } from '../../environments/environment';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
userData: any;
userDetails: any;
imag_path=image_path;
appUrl = "https://theitvibe.com/project/ihose/api/user";
appUpdate = "https://theitvibe.com/project/ihose/api/updateUserProfile";
page:any;
image:any;
user_img:any;

  email: any;
  password: any;
  res: any;
  f_name: any;
  l_name: any;
  phone_number: any;
  password_confirmation: any;
  address: any;
  userId: any;
  action:any;
  htmlYouWantToAdd:any;
  imgget:any;
  
  constructor(public http: Http,
   public navCtrl: NavController, 
   public storage: Storage,
   public loadingController: LoadingController,
   public alertController: AlertController,
   private location: Location

   ) {


this.storage.get("userDetails").then(val=>{
      if(val){
        this.userDetails = val;
        
        var headers = new Headers();
       
  //headers.append('Authorization', 'Bearer ' + this.userDetails.api_token);
  let data={
    
    "user_id": this.userDetails.response_data.id,
       
  }
  //console.log(this.userDetails.response_data.id);
  //console.log(this.userDetails.user_id);
   this.http.get(host+'get-user?user_id='+this.userDetails.response_data.id)
	.subscribe(res => {
		
		this.res = res.json();
		//console.log(this.res);
		 if(this.res.status){

		this.userData =this.res;
		this.phone_number = this.userData.response_data.phone_number;
		this.f_name = this.userData.response_data.first_name;
			this.l_name = this.userData.response_data.last_name;
      this.address = this.userData.response_data.address;
      this.user_img=this.userData.response_data.avatar;
		
		}else{
		alert("Server error");
		//loading.dismiss();
		}
	}, (err) => {
		console.log(err);
		//loading.dismiss();
	});
      }
    });


   }
  ngOnInit() {
  }
  async updateProfile(){
  const loading = await this.loadingController.create({
    message: 'Updating...'
  });
const namealrt = await this.alertController.create({
     message: 'Please enter first name',
      buttons: ['OK']
    });
const lnamealrt = await this.alertController.create({
     message: 'Please enter last name',
      buttons: ['OK']
    });



    const phonealrt = await this.alertController.create({
     message: 'Please enter phone no',
      buttons: ['OK']
    });
const addressalrt = await this.alertController.create({
     message: 'Please enter address',
      buttons: ['OK']
    });
    const erroralrt = await this.alertController.create({
     message: 'Sorry,something went wrong',
      buttons: ['OK']
    });
    const successalrt = await this.alertController.create({
     message: 'Profile update successful',
      buttons: ['OK']
    });

    var headers = new Headers();
    //headers.append("Accept", 'application/json');
	 if(this.f_name == '' || this.f_name == null){
     
    loading.dismiss();
    namealrt.present();
  }else if(this.l_name == '' || this.l_name == null){
     
    loading.dismiss();
    lnamealrt.present();
  }else if(this.phone_number == '' || this.phone_number == null){
  loading.dismiss();
  phonealrt.present();
    
  }else if(this.address != this.address){
  loading.dismiss();
  addressalrt.present();
    
  }else{
	await loading.present();
	// var data ={
 //    "f_name": this.f_name,
 //    "l_name": this.l_name,
 //    "phone_number": this.phone_number,
 //     "address": this.address,
 //     "avatar":this.image,
 //     "id": this.userData.response_data.id
   
 //  }

	let data = new FormData();
	data.append('f_name', this.f_name);
	data.append('l_name', this.l_name);
	data.append('id', this.userData.response_data.id);
	data.append('phone_number', this.phone_number);
	data.append('address', this.address);
    data.append('avatar', this.image);

	this.http.post(host+'update-user-al', data, { headers: headers })
	.subscribe(res => {
		//console.log(res.json());
		this.res = res.json();
   // console.log(this.res);
		if(this.res.status == false){
		loading.dismiss();
		erroralrt.present();
		}else if(this.res.status){
		this.htmlYouWantToAdd = this.f_name +' '+this.l_name;
    this.user_img=this.res.response_data.avatar;
    this.imgget='';
		//this.navCtrl.navigateForward('login');
		successalrt.present();
		loading.dismiss();
		}else{
		//alert("Server error");
		loading.dismiss();
		}
	}, (err) => {
		console.log(err);
		loading.dismiss();
	});

	}


  }



  
  fileLoad(event){
  //console.log(event);
  		//this.photo = event.target.files[0];
  }
 back(){
	
  	this.storage.get("goTo").then(val=>{
      if(val){
        this.page = val;
        this.navCtrl.navigateForward(''+this.page);
    }else{
    	this.navCtrl.navigateForward('/');
    }
        });
  
      
       //this.location.back();
  }
    importFile(event) {
    if (event.target.files && event.target.files.length > 0) {
      let files = event.target.files || event.dataTransfer.files;
      if (!files.length)
        return;

      var fileName = files[0].name.toUpperCase();

      if (fileName.endsWith(".JPG") || fileName.endsWith(".JPEG") || fileName.endsWith(".PNG")) {
        //console.log(files[0]);
        this.image = files[0];
        //this.imageLoaded = true;
      } else {
        this.image = null;
        //this.alertMsg("Error!", "Please select a valid image file jpeg/jpg/png", 'error');
      }
    }

  }
onlyNumberKey(event:any) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
}
}
