import { Component } from '@angular/core';
import {element} from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  noticias = [];
  titulo = null;
  conteudo = null;
  descricao = null;
  data = null;
  categoria = null;
  tags = [];
  editora = null;
  publicada = false;
  editarNoticia = null;
  mostrar(noticia) {
    noticia.visivel = true;
  }

  fechar(noticia) {
    noticia.visivel = false;
  }
  salvar() {
    if (this.editarNoticia) {
      this.editarNoticia.titulo = this.titulo;
      this.editarNoticia.conteudo = this.conteudo;
      this.editarNoticia.descricao = this.descricao;
      this.editarNoticia.data = this.data;
      this.editarNoticia.categoria = this.categoria;
      this.editarNoticia.tags = this.tags;
      this.editarNoticia.editora = this.editora;
      this.editarNoticia.publicada = this.publicada;
    } else {
      const noticia = {
        id: Math.random(),
        titulo: this.titulo,
        conteudo: this.conteudo,
        descricao: this.descricao,
        data: this.data,
        categoria: this.categoria,
        tags: this.tags,
        editora: this.editora,
        publicada: this.publicada
      }
      this.noticias.push(noticia);
    }
    this.titulo = null;
    this.conteudo = null;
    this.descricao = null;
    this.data = null;
    this.categoria = null;
    this.tags = null;
    this.editora = null;
    this.publicada = null;
  }
  editar(noticia) {
    this.editarNoticia = noticia;
    this.titulo = noticia.titulo;
    this.conteudo = noticia.conteudo;
    this.descricao = noticia.descricao;
    this.data = noticia.data;
    this.categoria = noticia.categoria;
    this.tags = noticia.tags;
    this.editora = noticia.editora;
    this.publicada = noticia.publicada;
  }
  excluir(noticia) {
    if (confirm(`Tem certeza que deseja excluir a notícia: ${noticia.titulo} ?`)) {
      this.noticias = this.noticias.filter(element => element.id != noticia.id)
    }
  }

}
