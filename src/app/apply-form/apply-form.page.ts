import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController} from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { host } from '../../environments/environment';
import { DomSanitizer} from '@angular/platform-browser';
import { IonSlides } from '@ionic/angular';
import { image_path } from '../../environments/environment';

@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.page.html',
  styleUrls: ['./apply-form.page.scss'],
})
export class ApplyFormPage implements OnInit {

  
    isLoading = false;

page:any;
 data_contact: any;
 image_path=image_path;
 courses:any;
 states:any;
 state:any='';
 course:any='';
 email:any;
 phone:any;
 fname:any;
 lame:any;
 subject:any;
 message:any;
   constructor(public http: Http, public navCtrl: NavController,
    public storage: Storage,public loadingController: LoadingController,
    public alertController: AlertController,
       private menu: MenuController,
       //public events: Events
    ) { }

  ngOnInit() {
  }
     async submit(){
const loading = await this.loadingController.create({
    message: 'Sending...'
  });
  
     
var headers = new Headers();
  if(this.fname == '' || this.fname == null){
     
    loading.dismiss();
    this.alertController.create({
     message: 'Please enter name',
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
  }else if(this.email == '' || this.email == null){
     
    loading.dismiss();
    this.alertController.create({
     message: 'Please enter email',
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
  }
  else if(this.phone == '' || this.phone == null){
     
    loading.dismiss();
    this.alertController.create({
     message: 'Please enter phone no',
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
  }else if(this.message == '' || this.message == null){
     
    loading.dismiss();
    this.alertController.create({
     message: 'Please enter message',
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
  }else{
   await loading.present();
  var data ={
    // "name": this.fname,
    // "email": this.email,
    // "phone_number": this.phone,
    // "message": this.message,
   
  }

  this.http.post(host+'contact', data)
  .subscribe((res:any) => {
    //console.log(res.json());
    res = res.json();
    if(res.status == false){
    loading.dismiss();
    this.alertController.create({
      
      message: res.message,
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
    
    }else if(res.status == true){
   //     this.fname='';
   //     this.email='';
   // this.phone='';
   //  this.message='';
   this.alertController.create({
      
      message: res.message,
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
    loading.dismiss();
    }else{
    this.alertController.create({
     message: 'Something went wrong',
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
    loading.dismiss();
    }
  }, (err) => {
    //console.log(err);
    loading.dismiss();
  });

  }
}

}
