# Ekta frontend template.

### Our stack
    - Next.js
    - Material UI
    - Mobx
    - Typescript
    - React hook form
    - Ethers.js
    - Wagmi
    - Axios
    - React toastify


### How run template:
    yarn install
    yarn dev

> Also configure prettier in your IDE for code style. Prettier file is available.

<br/>

## Template structure
![structure](/public/images/template/structure.png) <br/>
Next.js project structure. For more info go to [nextjs.org](https://nextjs.org/)
 - ***/pages*** -- for pages
 - ***/public*** -- for static assets

## Development
 *We are using **clean architecture** with **modular structure***<br>

 
***Main Folders***
> **/base** -- Project configurations such as - **api**, **localstorage**, **global store**, **abstract classes**, **notification** <br><br>
> **/components** -- Project global components such as - **header**, **footer**, **wallet connect**, **initialization components**, **inputs** etc.<br><br>
> **/consts** -- Project constant variables **(constants are never changing)**<br><br>
> **/contexts** -- Project contexts such as - **Theme provider**<br><br>
> **/data** -- Project data such as - **social links**, **chains** etc.<br><br>
> **/helpers** -- Project helpers such as - **String helper**, **Auth helper** etc. Better use helpers with classes. Because classes make our code more clean and understandable<br><br>
> **/hocs** -- Project High Order Components. In the template they used for check connection and roles. (for more info go to [hoc](https://reactjs.org/docs/higher-order-components.html))<br><br>
> **/hooks** -- Project Hooks. In the template they used for dynamic media queries (for more info go to [hooks](https://reactjs.org/docs/hooks-intro.html))<br><br>
> **/layouts** -- Project Layouts. Can be used different layouts for different pages.<br><br>
> **/mocks** -- Project Mock data for development purpose.<br><br>
> **/modules** -- Project logic. All api calls and data modifications should be inside modules, also modules used as global store. More info below.<br><br>
> **/screens** -- Project screens for use inside pages. Screens are different from pages. All components used for that screen should be inside screen folder<br><br>
> **/styles** -- Project themes for Material UI. In the template have 2 themes from Tokyo next.js template. Can be modified (for more info about theming mui go to [mui theming](https://mui.com/material-ui/customization/theming/))<br><br>

![structure](/public/images/template/src.png)
![structure](/public/images/template/components.png)
![structure](/public/images/template/screens.png)
![structure](/public/images/template/styles.png)

### Modules
 *Inside modules folder should be module folder. Inside module folder should be **ModuleStore**, **ModuleService**, **ModuleApi**, **ModuleFactory***<br>
- ***ModuleStore*** -- global Mobx store. All data should be here.
- ***ModuleService*** -- here should be all data modifications and api calls.
- ***ModuleFactory*** -- factory is used for create data structures from models. If not use factory you will get errors when your data null or undefined. Factory helps you make sure that you will get your data correctly.
- ***ModuleApi*** -- all api calls should be here. If there is no api don't need use it<br><br>
  ![structure](/public/images/template/modules.png)
### Auth
*In the template already have registration and login with our api. We are using **signature** for register users and **Bearer token** for login and fetch data*<br>
*You can modify **/wallet** folder inside **/components** for your needs. In the template we're using **wagmi** and **ethers.js** for interacting with wallets and contracts.*
