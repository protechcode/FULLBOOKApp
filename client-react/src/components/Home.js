import { Component } from 'react';
import AppNavbar from './AppNavbar';
import {Button, Container } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import { addToCart } from '../actions/cartActions';
import ItemModal from './ItemModal';
import BannerOneProduct from './BannerOneProduct';
import Footer from './Footer';
import BestService from './BestService';
import Featured from './Featured';
import swal from 'sweetalert';



class Home extends Component {

  componentDidMount() {
    this.props.getItems();
  }

  static propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool,
    addToCart: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
  }

  onAddToCart = async (id, productId) => {
    await this.props.addToCart(id, productId, 1);
    swal({
      title: "Item added to Cart!",
      icon: "success",
    });  }

  render() {


    const { items } = this.props.item;
    const user = this.props.user;

    return (
      <div>
     
        <AppNavbar />

        <Container>
          <BannerOneProduct />
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              { 
             
              items.map((item) => (
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img className="w-full h-full lg:max-w-2xl" src={item.image_1} alt="Catalogue-pana.svg" />
                  </a>
                  <div className="mt-4 items-center">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1"></h3>
                    <ItemModal item={item} key={item._id} />

                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <div className="flex items-center justify-between  ">
                      <div>
                        <p className="mt-1">{item.sell_price}€</p>

                      </div>
                      {this.props.isAuthenticated ? 
                                <Button
                                    color="success"
                                    size="sm"
                                    onClick={this.onAddToCart.bind(this, user._id, item._id)}
                                    >Add To Cart</Button> :
                                    null}
              </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
         
          <BestService />

        </Container>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
})

export default connect(mapStateToProps, { getItems, addToCart })(Home);