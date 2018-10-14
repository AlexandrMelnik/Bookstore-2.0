import { connect } from 'react-redux';
import { addBookToCart } from '../redux/actions/cart';
import BookCard from '../components/BookCard';


export default connect(null, { addBookToCart })(BookCard);
