import { NgModule } from "@angular/core";
import { FnamePipe } from "./fname.pipe";

@NgModule({
  declarations: [FnamePipe],
  exports: [FnamePipe]
})
export class PipesModule {}