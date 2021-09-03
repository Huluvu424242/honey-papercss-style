import {Component, getAssetPath, h} from '@stencil/core';

@Component({
  tag: 'honey-papercss-style',
  styleUrl: 'honey-papercss-style.css',
  assetsDirs: ['assets']
})
export class HoneyPapercssStyle {

  render() {
    const stylePath: string = getAssetPath('./assets/paper.min-1.8.2.css');
    return <link rel="stylesheet" href={stylePath}/>
  }
}
