import {Component, getAssetPath, h} from '@stencil/core';

@Component({
  tag: 'honey-papercss-style',
  assetsDirs: ['assets']
})
export class HoneyPapercssStyle {

  public connectedCallback() {
    // add class paper to body
    let classes: string = document.body.getAttribute("class");
    if(classes === null) classes = "paper";
    if (classes.search("paper") < 0) {
      classes += " paper";
    }
    document.body.setAttribute("class", classes);
  }

  public disconnectedCallback() {
    // remove class paper from body
    let classes: string = document.body.getAttribute("class");
    classes = classes.replace("paper", "");
    document.body.setAttribute("class", classes);
  }

  render() {
    const stylePath: string = getAssetPath('./assets/paper.min.css');
    return <link rel="stylesheet" href={stylePath}/>
  }
}
