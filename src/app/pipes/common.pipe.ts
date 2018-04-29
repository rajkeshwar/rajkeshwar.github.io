import { Pipe, PipeTransform, NgModule } from '@angular/core';
import * as marked from 'marked';

@Pipe({name: 'common'})
export class CommonPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return null;
  }
}

interface MarkedOptions {
  renderer: object,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
}

/**
 * Usage: <div [innerHTML]="content|markdown"></div>
 */
@Pipe({name: 'markdown'})
export class MarkdownPipe implements PipeTransform {
    public transform(markdown: string, options?: MarkedOptions): string {
        if (markdown == null) return '';
        return marked(markdown, options);
    }

    public static setOptions(options: MarkedOptions): void {
        marked.setOptions(options);
    }
}

@Pipe({name: 'StringConcat'})
export class StringConcatPipe implements PipeTransform {
  transform(markdown: string = ''): string {
    return markdown.replace(/^\s+|\s+$/gm, '');
  }
}
