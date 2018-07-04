customElements.define('app-like', class extends HTMLElement {

  constructor() {
    super();
  }
  async connectedCallback() {
    this.innerHTML = `
        <ion-header>
        <ion-toolbar style="background: floralwhite">
          <ion-title>PWA Test</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content padding> 
        <p>
        Will be the list of everything
        </p>      
        <ion-list>
        <ion-item>
          <p style="color: red"> 
          Feel free
          </p>
        </ion-item>
        <ion-item>
        <p style="color: blue"> 
          Feel nice
        </p>
      </ion-item>
        </ion-list>
      </ion-content>  
      `;
  }


});

customElements.define('app-unlike', class extends HTMLElement {

  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
            <ion-header>
            <ion-toolbar style="background: floralwhite">
              <ion-title>PWA Test</ion-title>
            </ion-toolbar>
            </ion-header>
          <ion-content padding>
            <p>
            Will be the list of things you unlike
            </p>
            <ion-list>
            <ion-item>
            <p style="color: brown"> 
              Feel bad
            </p>
          </ion-item>
            </ion-list>
          </ion-content>   
        `;


  }

});

customElements.define('app-everything', class extends HTMLElement {

  constructor() {
    super();
  }
  async connectedCallback() {
    this.innerHTML = `
          <ion-header>
          <ion-toolbar style="background: floralwhite">
            <ion-title>PWA Test</ion-title>
          </ion-toolbar>
        </ion-header>
      
        <ion-content padding>
          <p>
           Will be the list of things you like
          </p>
          <ion-list>
          <ion-item>
            <p style="color: red"> 
              Feel free
            </p>
          </ion-item>
          <ion-item>
          <p style="color: blue"> 
            Feel nice
          </p>
        </ion-item>
        <ion-item>
        <p style="color: brown"> 
          Feel bad
        </p>
      </ion-item>
          </ion-list>
      </ion-content>  
          `;
  }



});


customElements.define('app-tabs', class TabsPage extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
          <ion-tabs>
            <ion-tab label='Like' icon='ios-thumbs-up'>
              <ion-nav class="tab-one-nav"></ion-nav>
            </ion-tab>
            <ion-tab label='Unlike' icon='ios-thumbs-down'>
              <ion-nav class="tab-two-nav"></ion-nav>
            </ion-tab>
            <ion-tab label='Everything' icon='ios-pulse'>
              <ion-nav class="tab-three-nav"></ion-nav>
            </ion-tab>
  
          </ion-tabs>
        `;
    const navOne = this.querySelector('.tab-one-nav');
    await navOne.componentOnReady();
    await navOne.setRoot('app-like');
    const navTwo = this.querySelector('.tab-two-nav');
    await navTwo.componentOnReady();
    await navTwo.setRoot('app-unlike');
    const navThree = this.querySelector('.tab-three-nav');
    await navThree.componentOnReady();
    await navThree.setRoot('app-everything');

  }
});


async function init() {
  const nav = document.querySelector('ion-nav');
  await nav.componentOnReady();
  nav.root = 'app-tabs';
}



document.body.innerHTML = `
          <ion-app> 
            <ion-nav></ion-nav>
          </ion-app>
    `;

document.body.onload = init();