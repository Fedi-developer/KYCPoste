import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Docum } from '../models/document';
@Component({
  selector: 'app-kycfinal',
  templateUrl: './kycfinal.component.html',
  styleUrls: ['./kycfinal.component.css']
})
export class KYCfinalComponent implements OnInit {
doc : string=''
docum =new Docum();
  constructor(private activatedRoute: ActivatedRoute, private authservice : AuthService ) {
    this.doc= this.activatedRoute.snapshot.params.id

   }

  ngOnInit(): void {

}

files: File[] = [];

	onSelect(event: { addedFiles: any; }) {
		console.log(event);
		this.files.push(...event.addedFiles);
    if(this.files.length > 1){ // checking if files array has more than one content
      this.replaceFile(); // replace file
      }
	}

	onRemove(event: File) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
	}


    
    //method for replacing file
    replaceFile(){
    this.files.splice(0,1); // index =0 , remove_count = 1
    }


    onSignup(){
      
      
      this.docum= {passport : this.files[0]};
console.log(this.docum)
      this.authservice.doc(this.docum).subscribe((res:number) => 
        {console.log(res)
      },
      err => {
        console.log(err)
      }
      )
    }

}
