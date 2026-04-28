import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss'],
    standalone: true,
  imports: [DatePipe]
})
export class MessageItemComponent implements OnInit {

  @Input('message')
  message: Message;

  constructor() { }

  ngOnInit() {
  }

}
