import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
//  ประกาศตัวแปร  ข้างล่าง.

itemcount:number=4;
textbutton:string='เพิ่มรายการ';//One way binding
listtext:string='รายการเริ่มต้น';  // two way binding  (model)
listall=[];

  constructor() { }

  ngOnInit() {
    this.itemcount=this.listall.length;  //นับจำนวน  bucket list   ค่าตั้งต้น
  }
  addItem()
  {
//รับเข้าจาก form แล้วบันทึกลงอาเรย์
if(this.listtext !=""){

this.listall.push(this.listtext);
// เคลียร์ค่าใน ฟอร์ม
this.listtext='';
this.itemcount=this.listall.length;//นับจำนวน  bucket list   ทุกครั้งที่เพ่ิม
                              }
 }
}
