import React, { useState, useEffect } from 'react';
import './Product.css';
import Footer from './Footer';


const Product = () => {
    const products = [
        { id: 1, color: 'green', product: 'cotton', price: 1200, image: 'https://www.jagstore.in/cdn/shop/files/53829846356_e27d69b34a_o_d-1000x1000.webp?v=1722067066&width=360' },
        { id: 2, color: 'darkblue', product: 'cotton', price: 1500, image: 'https://www.jagstore.in/cdn/shop/files/53829860216_2b9e04e3f6_o_d-1000x1000.webp?v=1722066985&width=360' },
        { id: 3, color: 'wine', product: 'cotton', price: 1000, image: 'https://www.jagstore.in/cdn/shop/files/53830290840_0ca9c040e6_o_d-1000x1000.webp?v=1722066344&width=360' },
        { id: 4, color: 'green', product: 'cotton', price:2000 , image:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQyzlGUIc-B3RySEBVnHW00TfRoTdIWVJBtiz-zofBWpAUHqR80xmqMi9CwRoXGoQpXBQHMjkGJXec4Od7dlFbqevAvcx4jkBJGZzVYL4c&usqp=CAE'},
        { id: 5, color: 'yellow', product: 'cotton', price:1500 , image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ1qjbSWsH9lVPZ5Z3MqoHg1cmc8h4YYci7177cH5ryaoF7fUyYR5pWe6r6v0l3OLSnIPt15YXqQZTGcc9_ZrJwurz3PCOXzaAuIfmgL10&usqp=CAE' },
        { id: 6, color: 'white', product: 'cotton', price:800 , image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQRus2MFLBgL5UG2synabMnPhOuFfcQro24VWeJqSNbpPTQ94aLsi-YWZJsQzcJr4095kX1DUVhHJme-35soUxld14tWBYySjcyvUwLzLjYwFgtwFBH8L6Y&usqp=CAE' },
        { id: 7, color: 'blue', product: 'kurti sets', price:1300 , image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQOIFAcViiHel3PrMId_2td4aATEHTs7ElmRxAcWc-z2nSNsu7RuUSjX2BEoZf7c0H04RHPVETHSwkYC9q3Xbt0-VNvo9DD3eRiOzimtioi&usqp=CAE' },
        { id: 8, color: 'white', product: 'kurti sets', price:900 , image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRAHBhYuJrsbY_DHfMhw7i27-Jn3Z9LZQ7AFGUtmsa3H_2F8KA1iSTEzxqcDBlWT6noW3QMUGKr1RqirRmsBaXzae7TuehHyxHuvdEBDkfBkqAe2-4btJpQ&usqp=CAE' },
        { id: 9, color: 'darkblue', product: 'kurti sets', price:2000 , image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSNeR43Wh-z1zngUNhTR1iHgdzVxBjQPaRYjLZPYdToJjT3SCRjIm-tniMQmlVrhQPzSt6KJ_L4trn930X_BEvsUUkmIsFZ0DNKBMwLTkpW&usqp=CAE' },
        { id: 10, color: 'grey', product: 'kurti sets', price:1200 , image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSML5PPl_YlqvkKYSFQJXpfjMod_JteXp-IQihhRicS2PwJu6xZ3wwzm_TMmGsCMcj-8AuTaSCj6FFmJH12lr_g1BXKggum9VjBtPXMOo4y&usqp=CAE' },
        { id: 11, color: 'blue', product: 'kurti sets', price:900 , image: 'https://cdn.shopify.com/s/files/1/0341/4805/7228/files/blue-embroidered-rayon-straight-kurta-with-palazzos-libas-1-27529723936918.jpg?v=1698669321' },
        { id: 12, color: 'yellow', product: 'kurti sets', price: 1200, image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR8aLzBgnvQ5V3taOaloU8w_VaN59xSGqFQPds7-HmgeHiTDI8cWRxcBCniozEYYXXj7STzlRqAzEk9dQU-uU0icqawG6c-ZD-poQkYrJs&usqp=CAE' },
        { id: 13, color: 'red,blue', product: 'combo offers', price:800 , image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSLea8pVdvCv9Dgxcw-H9g39QQxbr3nIIlfral8Us-REJ03HwQwI7Zk7Atg5Q7-XsWJKBND6LVd1SAXbfqkOiLOTHPjYuckZoBpes3SiIOmhYoYryQs7K22&usqp=CA' },
        { id: 14, color: 'red,blue', product: 'combo offers', price:1000 , image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQG575ywat0hLWFgSdI-GWixz14aoowcpRWECdvYBGfVJrOGCtsUuXDoc_oSZSxhp_IMlEV9VCR0GV-WS8PspbZQd8WvTnBffvRmeYoyYvziLRTG2tJ_zdmcw&usqp=CAE' },
        { id: 15, color: 'yellow,pink', product: 'combo offers', price:700, image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRKOrhiSG-wm3KAChSKrHQuVDe9h7c76Zf32sDIkibQJLKAPRy5daPXPgcykkiSFUsQBf7s_Nfw9f7EJJgJlVJcbNOm15nUvPJVLZ1KZbpMTCxIbcQTRYPXbg&usqp=CAE' },
        { id: 16, color: 'black,green', product: 'combo offers', price:1200 , image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQpMEf-sBWhH0pUrIskJSsruIU6paeqcIN0MgVcIUQp8xCFlJQuHlIe-sH6qcPGzdSTXrC_i2bWnLPpygyn2vGrHPl0quLvuvQYMIlssXLQOU9gdEwiewoCb5s' },
        { id: 17, color: 'blue,pink', product: 'combo offers', price:900 , image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcST86i6ixdGf8FcdE9XfNXaqO1poUOc9Aos-1TY7ccZPijidGpT8DZqalvyyYM_VjMnR2Ie_d0JSSItzfEPaK4s3KkFe6B50Erp4q-tk9_ZhFjql1JxM5zyvA&usqp=CAE' },
        { id: 18, color: 'red,sandle', product: 'combo offers', price:1000 , image: 'https://rukminim2.flixcart.com/image/850/1000/l44hyfk0/ethnic-set/v/i/s/xxl-kurta-set-combo-kurti-wala-original-imagf392ywph8vms.jpeg?q=90&crop=false' },
    ];

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedPrices, setSelectedPrices] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState(products)

    useEffect(() => {
      const filterProducts = () => {
          const filtered = products.filter(product => {
              const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.product);
              const matchesColor = selectedColors.length === 0 || selectedColors.includes(product.color.toLowerCase());
              const matchesPrice = selectedPrices.length === 0 || selectedPrices.includes(getPriceRange(product.price));
              return matchesCategory && matchesColor && matchesPrice;
          });
          setFilteredProducts(filtered);
      };
      filterProducts();
  }, [selectedCategories, selectedColors, selectedPrices, products]);

    const getPriceRange = (price) => {
        if (price >= 500 && price < 800) return '500-800';
        if (price >= 800 && price < 1000) return '800-1000';
        if (price >= 1000 && price < 1500) return '1000-1500';
        if (price >= 1500 && price < 2000) return '1500-2000';
        return '';
    };



    const handleCheckboxChange = (setState, value) => {
        setState(prevState =>
            prevState.includes(value) ? prevState.filter(item => item !== value) : [...prevState, value]
        );
    };

    
 return (
    <>
        <div className="container">
            <div className="left-side">
                <div className="card">
                    <h3>Products</h3>
                    <label>
                        <input
                            type="checkbox"
                            name="category"
                            value="cotton"
                            onChange={() => handleCheckboxChange(setSelectedCategories, 'cotton')}
                        />
                        Saree
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="category"
                            value="kurti sets"
                            onChange={() => handleCheckboxChange(setSelectedCategories, 'kurti sets')}
                        />
                        Kurti Sets
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="category"
                            value="combo offers"
                            onChange={() => handleCheckboxChange(setSelectedCategories, 'combo offers')}
                        />
                        Combo Offers
                    </label>
                </div>

                <div className="card">
                    <h3>Colors</h3>
                    <label>
                        <input
                            type="checkbox"
                            name="color"
                            value="blue"
                            onChange={() => handleCheckboxChange(setSelectedColors, 'blue')}
                        />
                        Blue
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="color"
                            value="green"
                            onChange={() => handleCheckboxChange(setSelectedColors, 'green')}
                        />
                        Green
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="color"
                            value="yellow"
                            onChange={() => handleCheckboxChange(setSelectedColors, 'yellow')}
                        />
                        Yellow
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="color"
                            value="white"
                            onChange={() => handleCheckboxChange(setSelectedColors, 'white')}
                        />
                        white
                    </label>
                </div>

                <div className="card">
                    <h3>Price</h3>
                    <label>
                        <input
                            type="checkbox"
                            name="price"
                            value="500-800"
                            onChange={() => handleCheckboxChange(setSelectedPrices, '500-800')}
                        />
                        ₹500-₹800
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="price"
                            value="800-1000"
                            onChange={() => handleCheckboxChange(setSelectedPrices, '800-1000')}
                        />
                        ₹800-₹1000
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="price"
                            value="1000-1500"
                            onChange={() => handleCheckboxChange(setSelectedPrices, '1000-1500')}
                        />
                        ₹1000-₹1500
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="price"
                            value="1500-2000"
                            onChange={() => handleCheckboxChange(setSelectedPrices, '1500-2000')}
                        />
                        ₹1500-₹2000
                    </label>
                </div>
            </div>

            <div className="right-side">
                <h3>Here are the collections</h3>
                <div className="card-container">
            {filteredProducts.map(product => (
                        <div className="image-card" key={product.id}>
                            <img src={product.image} alt={product.product} />
                            <h5>
                                Colour: {product.color}<br />
                                Product: {product.product}<br />
                                Price: ₹{product.price}
                            </h5>
                            <div className='rating'>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            {/* <i class="fa-regular fa-heart fa-2xl"></i> */}
                            </div>
                            <button className="add-to-cart-btn" >
                            Add to Cart </button>
                        </div> 
                        
                    ))}
                </div>
            </div>
          
        </div>
          <Footer/>
          </>
    );
};

export default Product;
