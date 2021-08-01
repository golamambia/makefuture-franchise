import { Component, OnInit,ViewChild  } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";
import { host } from '../../environments/environment';
import { image_path } from '../../environments/environment';
import { DomSanitizer} from '@angular/platform-browser';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-find-course',
  templateUrl: './find-course.page.html',
  styleUrls: ['./find-course.page.scss'],
})
export class FindCoursePage implements OnInit {
	image_path=image_path;
	course_data:any;
	type:any='';
   constructor(public http: Http,
   public navCtrl: NavController, 
   public storage: Storage,
   public loadingController: LoadingController,
   public alertController: AlertController,
   public route: ActivatedRoute,
  public  sanitizer: DomSanitizer


   ) { }

  ngOnInit() {
  }
   ionViewWillEnter(){
  	 this.getCourse();
  }

 async getCourse(type=null){
     const loading = await this.loadingController.create({
    message: ''
  });
    let data={
    
    "user_id": '',
       
  }
    await loading.present();
     const headers = new Headers();
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Methods', 'GET');
        headers.append('Access-Control-Allow-Origin', '*');
         headers.append('Access-Control-Allow-Credentials', 'true');
   this.http.get(host+'course-list?type='+type)
  .subscribe((res:any) => {
    
    res = res.json();
    console.log(res);
   
       //this.all_data=res;
       this.course_data=res.course_list;

      
        loading.dismiss();
   
   

  }, (err) => {
    //console.log(err);
     loading.dismiss();
  });
  }

}
