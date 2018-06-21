import { Component, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements AfterViewChecked {
  @ViewChild('chatBox')
  chatBox: ElementRef;

  mensaje = '';

  constructor(public chatService: ChatService) {
    this.chatService.cargarMensajes()
    .subscribe();
   }

  ngAfterViewChecked() {
    this.chatBox.nativeElement.scrollTop = this.chatBox.nativeElement.scrollHeight;
  }

  enviarMensaje() {
    console.log(this.mensaje);

    if (this.mensaje.length === 0) {
      return;
    }

    this.chatService.agregarMensaje(this.mensaje)
    .then(() => this.mensaje = '')
    .catch( (err) => console.error('error enviando mensaje', err));
  }
}
