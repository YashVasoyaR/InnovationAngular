import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlindsComponent } from './blinds/blinds.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrderTrackComponent } from './order-track/order-track.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RegisterComponent } from './register/register.component';
import { ShadesComponent } from './shades/shades.component';
import { ShuttersComponent } from './shutters/shutters.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"blinds", component:BlindsComponent},
  {path:"shutters", component:ShuttersComponent},
  {path:"shades", component:ShadesComponent},
  {path:"cart", component:CartComponent},
  {path:"product-detail", component:ProductDetailComponent},
  {path:"checkout", component:CheckoutComponent},
  {path:"contact", component:ContactComponent},
  {path:"order-track", component:OrderTrackComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"wishlist", component:WishlistComponent},
  {path:"my-account", component:MyAccountComponent},
  {path:"", redirectTo:"/home",pathMatch:"full"},
  {path:"**", component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
