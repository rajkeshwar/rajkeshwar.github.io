
import { NgModule } from '@angular/core';
import { CommonPipe, MarkdownPipe, StringConcatPipe } from './common.pipe';

const COMMON_PIPES = [
  CommonPipe,
  MarkdownPipe,
  StringConcatPipe
];

@NgModule({
  declarations: COMMON_PIPES,
  exports: COMMON_PIPES
})
export class CommonPipesModule {}