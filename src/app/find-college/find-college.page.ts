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
  selector: 'app-find-college',
  templateUrl: './find-college.page.html',
  styleUrls: ['./find-college.page.scss'],
})
export class FindCollegePage implements OnInit {

  state_list:any;
  list_college:any;
  image_path=image_path;
  course_list:any;
  all_data:any;
  state:any='';
  course:any='';

  constructor(public http: Http,
   public navCtrl: NavController, 
   public storage: Storage,
   public loadingController: LoadingController,
   public alertController: AlertController,
   private location: Location

   ) {
   }
    ngOnInit() {
   // console.log(host);
  
  }
  ionViewWillEnter(){
  	 this.getCollege();
  }
openMenu() {
   //this.menu.open();
   this.navCtrl.navigateForward('sidebar');
 }
storePage(page){
  this.storage.set("goTo", page);
     
  }
 async getCollege(){
     const loading = await this.loadingController.create({
    message: ''
  });
    let data={
    
    "user_id": '',
       
  }
    await loading.present();
   this.http.get(host+'college-list?state='+this.state +'&course='+this.course)
  .subscribe((res:any) => {
    
    res = res.json();
    //console.log(res);
   
       //this.all_data=res;
       this.list_college=res.college_list;
       this.course_list=res.courses;
       this.state_list=res.states;
        loading.dismiss();
   
   

  }, (err) => {
    console.log(err);
     loading.dismiss();
  });
  }

}
