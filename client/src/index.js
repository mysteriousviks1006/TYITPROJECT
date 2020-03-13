import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'
import './css/index.scss';

// Import custom components
import store from './js/store';
import translations from './js/constants/translations'
import { getAllProducts } from './js/actions'
import Landing from './js/components/landing'


// Layouts
import Fashion from './js/components/layouts/fashion/main';
import Vegetables from './js/components/layouts/vegetables/main';
import Kids from './js/components/layouts/kids/main';
import Pets from './js/components/layouts/pets/main';
import Furniture from './js/components/layouts/furniture/main';
import Watch from './js/components/layouts/watch/main';
import Beauty from './js/components/layouts/beauty/main';
import Electronic from './js/components/layouts/electronic/main';


//Collection Pages
import CollectionLeftSidebar from "./js/components/collection/collection-left-sidebar";
import CollectionNoSidebar from "./js/components/collection/collection-no-sidebar";
import CollectionRightSidebar from "./js/components/collection/collection-right-sidebar";
import CollectionFullWidth from "./js/components/collection/collection-full-width";
import CollectionMetro from "./js/components/collection/collection-metro";

// Product Pages
import LeftSideBar from "./js/components/products/left-sidebar";
import RightSideBar from "./js/components/products/right-sidebar";
import NoSideBar from "./js/components/products/no-sidebar";
import LeftImage from "./js/components/products/left-image";
import RightImage from "./js/components/products/right-image";
import Accordian from "./js/components/products/accordian";
import ColumnLeft from "./js/components/products/column-left";
import ColumnRight from "./js/components/products/column-right";
import Column from "./js/components/products/column";
import Vertical from "./js/components/products/vertical";

// Features
import Layout from './js/components/app'
import Cart from './js/components/cart'
import Compare from './js/components/compare/index'
import wishList from './js/components/wishlist'
import checkOut from './js/components/checkout'
import orderSuccess from './js/components/checkout/success-page'

// Extra Pages
import aboutUs from './js/components/pages/about-us'
import PageNotFound from './js/components/pages/404'
import lookbook from './js/components/pages/lookbook'
import Login from './js/components/pages/login'
import Register from './js/components/pages/register'
import Search from './js/components/pages/search'
import Collection from './js/components/pages/collection'
import ForgetPassword from './js/components/pages/forget-password'
import Contact from './js/components/pages/contact'
import Dashboard from './js/components/pages/dashboard'
import Faq from './js/components/pages/faq'

// Blog Pages
import RightSide from './js/components/blogs/right-sidebar'
import Details from './js/components/blogs/details'
import BlogPage from './js/components/blogs/blog-page'

// Theme Element
import ElementTitle from "./js/components/features/theme/element-title"
import ElementBanner from "./js/components/features/theme/element-banner";
import ElementSlider from "./js/components/features/theme/element-slider";
import ElementCategory from "./js/components/features/theme/element-category";
import ElementService from "./js/components/features/theme/element-service";
import ElementRatio from "./js/components/features/theme/element-ratio";

// Product Elements
import ElementProductBox from "./js/components/features/product/element-product-box"
import ElementProductSlider from "./js/components/features/product/element-product-slider"
import ElementProductNoSlider from "./js/components/features/product/element-product-no-slider"
import ElementMultipleSlider from "./js/components/features/product/element-multiple-slider"
import ElementProductTab from "./js/components/features/product/element-product-tab"

class Root extends React.Component {

    render() {
        store.dispatch(getAllProducts());

        return(
        	<Provider store={store}>
                <IntlProvider translations={translations} locale='en'>
				<BrowserRouter basename={'/'} >
					<ScrollContext>
						<Switch>
                           {/* <Route exact path={`${process.env.PUBLIC_URL}/`} component={Landing}/>
                            <Route path={`${process.env.PUBLIC_URL}/vegetables`} component={Vegetables}/>
							<Route path={`${process.env.PUBLIC_URL}/electronic`} component={Electronic}/>
                            <Route path={`${process.env.PUBLIC_URL}/furniture`} component={Furniture}/>
							<Route path={`${process.env.PUBLIC_URL}/pets`} component={Pets}/>
							<Route path={`${process.env.PUBLIC_URL}/watch`} component={Watch}/>
                            <Route path={`${process.env.PUBLIC_URL}/kids`} component={Kids}/>
                            <Route path={`${process.env.PUBLIC_URL}/beauty`} component={Beauty}/>*/}
                            <Layout>

                                {/*Routes For Layouts*/}
                                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Fashion}/>

								{/*Routes For Features (Product Collection) */}
								<Route path={`${process.env.PUBLIC_URL}/left-sidebar/collection`} component={CollectionLeftSidebar}/>
								<Route path={`${process.env.PUBLIC_URL}/no-sidebar/collection`} component={CollectionNoSidebar}/>
								<Route path={`${process.env.PUBLIC_URL}/right-sidebar/collection`} component={CollectionRightSidebar}/>
								<Route path={`${process.env.PUBLIC_URL}/full-width/collection`} component={CollectionFullWidth}/>
								<Route path={`${process.env.PUBLIC_URL}/metro/collection`} component={CollectionMetro}/>

								{/*Routes For Single Product*/}
								<Route path={`${process.env.PUBLIC_URL}/left-sidebar/product/:id`} component={LeftSideBar}/>
								<Route path={`${process.env.PUBLIC_URL}/right-sidebar/product/:id`} component={RightSideBar}/>
								<Route path={`${process.env.PUBLIC_URL}/no-sidebar/product/:id`} component={NoSideBar}/>
								<Route path={`${process.env.PUBLIC_URL}/col-left/product/:id`} component={ColumnLeft}/>
								<Route path={`${process.env.PUBLIC_URL}/col-right/product/:id`} component={ColumnRight}/>
								<Route path={`${process.env.PUBLIC_URL}/accordian/product/:id`} component={Accordian}/>
								<Route path={`${process.env.PUBLIC_URL}/column/product/:id`} component={Column}/>
								<Route path={`${process.env.PUBLIC_URL}/left-image/product/:id`} component={LeftImage}/>
								<Route path={`${process.env.PUBLIC_URL}/right-image/product/:id`} component={RightImage}/>
								<Route path={`${process.env.PUBLIC_URL}/vertical/product/:id`} component={Vertical}/>
								

								{/*Routes For custom Features*/}
								<Route path={`${process.env.PUBLIC_URL}/cart`} component={Cart}/>
								<Route path={`${process.env.PUBLIC_URL}/wishlist`} component={wishList}/>
								<Route path={`${process.env.PUBLIC_URL}/compare`} component={Compare}/>
								<Route path={`${process.env.PUBLIC_URL}/checkout`} component={checkOut}/>
								<Route path={`${process.env.PUBLIC_URL}/order-success`} component={orderSuccess}/>

								<Route path={`${process.env.PUBLIC_URL}/sales/orders`} component={aboutUs}/>

								{/*Routes For Extra Pages*/}
                                <Route path={`${process.env.PUBLIC_URL}/pages/about-us`} component={aboutUs}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/404`} component={PageNotFound}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/lookbook`} component={lookbook}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/login`} component={Login}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/register`} component={Register}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/search`} component={Search}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/collection`} component={Collection}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/forget-password`} component={ForgetPassword}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/contact`} component={Contact}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/dashboard`} component={Dashboard}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/faq`} component={Faq}/>

								{/*Features*/}
								{/*Theme Elements*/}
                                <Route path={`${process.env.PUBLIC_URL}/features/element-title`} component={ElementTitle}/>
                                <Route path={`${process.env.PUBLIC_URL}/features/element-banner`} component={ElementBanner}/>
                                <Route path={`${process.env.PUBLIC_URL}/features/element-slider`} component={ElementSlider}/>
                                <Route path={`${process.env.PUBLIC_URL}/features/element-category`} component={ElementCategory}/>
                                <Route path={`${process.env.PUBLIC_URL}/features/element-service`} component={ElementService}/>
                                <Route path={`${process.env.PUBLIC_URL}/features/element-ratio`} component={ElementRatio}/>

								{/*Product Elements*/}
                                <Route path={`${process.env.PUBLIC_URL}/features/element-product-box`} component={ElementProductBox}/>
                                <Route path={`${process.env.PUBLIC_URL}/features/element-product-slider`} component={ElementProductSlider}/>
                                <Route path={`${process.env.PUBLIC_URL}/features/element-product-no-slider`} component={ElementProductNoSlider}/>
                                <Route path={`${process.env.PUBLIC_URL}/features/element-product-multiple-slider`} component={ElementMultipleSlider}/>
                                <Route path={`${process.env.PUBLIC_URL}/features/element-product-tab`} component={ElementProductTab}/>

								{/*Blog Pages*/}
                                <Route path={`${process.env.PUBLIC_URL}/blog/right-sidebar`} component={RightSide}/>
                                <Route path={`${process.env.PUBLIC_URL}/blog/details`} component={Details}/>
                                <Route path={`${process.env.PUBLIC_URL}/blog/blog-page`} component={BlogPage}/>

                                {/* <Route exact path="*" component={PageNotFound} /> */}
                            </Layout>
                         </Switch>
					  </ScrollContext>
					</BrowserRouter>
                </IntlProvider>
			</Provider>
    	);
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));


