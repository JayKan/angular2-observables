import { Directive, ViewContainerRef, TemplateRef } from '@angular/core';


@Directive({
  selector: '[ng-when][ng-when-is]',
  inputs: ['ngWhenIs', 'ngWhenTemplate']
})
export class NgWhen {
  private _prevCondition: boolean = null;

  constructor(private _viewContainer: ViewContainerRef, private _templateRef: TemplateRef) {}

  set ngWhenIs(newCondition: any) {
    if (newCondition && (isBlank(this._prevCondition) || !this._prevCondition)) {
      this._prevCondition = true;
      this._viewContainer.createEmbeddedView(this._templateRef).setLocal('\$implicit', newCondition);
    } else if (!newCondition && (isBlank(this._prevCondition) || this._prevCondition)) {
      this._prevCondition = false;
      this._viewContainer.clear();
    }
  }
  
  set ngWhenTemplate(value: TemplateRef) {
    if (isPresent(value)) {
      this._templateRef = value;
    }
  }
}