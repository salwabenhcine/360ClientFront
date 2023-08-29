import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccesSuccessComponent } from './acces-success/acces-success.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AppComponent } from './app.component';
import { CheckFinalComponent } from './check-final/check-final.component';
import { CheckoutComponent } from './checkout/checkout/checkout.component';
import { DealsComponent } from './deals/deals.component';
import { FaveProductComponent } from './fave-product/fave-product.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HistoriqueCComponent } from './historique-c/historique-c.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PanierComponent } from './panier/panier.component';
import { ProDdeCommandeComponent } from './pro-dde-commande/pro-dde-commande.component';
import { ProductComponent } from './product/product.component';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { ProduitsComponent } from './produits/produits.component';
import { RecetteDetailsComponent } from './recette-details/recette-details.component';
import { RecetteHomeComponent } from './recette-home/recette-home.component';
import { RegisterComponent } from './register/register.component';
import { SubCatComponent } from './sub-cat/sub-cat.component';
import { VerifyRegistrationComponent } from './verify-registration/verify-registration.component';
import { WaitRegistrationComponent } from './wait-registration/wait-registration.component';
import { AuthGuard } from './_auth/auth.guard';
import { DealComponent } from './deal/deal.component';
import { DealssComponent } from './dealss/dealss.component';


const routes : Routes =[
  {path: '', redirectTo: "acceuil", pathMatch: 'full'},
  {path:"acceuil", component:AcceuilComponent},
  {path:"productCategory/:nomcategorie", component:ProduitListComponent},
  {path:"productSubcategory/:nomsouscat", component:SubCatComponent},
  {path:"SuivieCheckout", component:CheckFinalComponent},

  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent },
  {path:"historique",component:HistoriqueCComponent, data:{roles:['USER']}},
  {path:"panier",component:PanierComponent,canActivate:[AuthGuard], data:{roles:['USER']}},
  {path:"faves",component:FaveProductComponent, data:{roles:['USER']} },
  {path:"forbidden",component:ForbiddenComponent},
  {path:"checkout",component:CheckoutComponent,data:{roles:['USER']} },
  {path:"admin", component: HomeComponent},
  {path:"Access",component:AccesSuccessComponent },
  {path:"Verify/:verificationcode",component:VerifyRegistrationComponent},
  {path:"wait",component:WaitRegistrationComponent },
  {path:"product/:code",component:ProductComponent},
  {path:"deals",component:DealssComponent},
  {path:"recetteDetails/:id",component:RecetteDetailsComponent},
  {path:"recetteHome",component:RecetteHomeComponent},
  {path:"addToWishlist",component:FaveProductComponent, data:{roles:['USER']} },
  {path:"checkout", component: CheckoutComponent,canActivate:[AuthGuard], data:{roles:['USER']} },
  {path: "productCheckoutCart/:orderId", component: ProDdeCommandeComponent, data:{roles:['USER']} },
  {path:"produit",component:ProduitsComponent,data:{roles:['USER']} },
  {path:"deal",component:DealComponent,data:{roles:['USER']} },


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
//RouterModule.forRoot(routes7)
export class AppRoutingModule { }
