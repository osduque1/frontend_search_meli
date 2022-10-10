import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Col, CardImg } from "reactstrap";
import { HiOutlineTruck } from "react-icons/hi";
import { isEmpty } from "lodash";
import { formatValueToCurrency } from "../../utils/utils.js";
import { getProductsDetail as getProductsDetailAction } from "../../actions/storeApp/storeApp.action";
import Loader from "../../components/Loader/Loader";
import CardInfo from "../../components/CardInfo/CardInfo";
import "./Products.scss";

const Products = ({ products, getProductsDetail }) => {
  const navigate = useNavigate();
  const { responseData, isLoading, isError, isSuccess } = products;
  const decimals = (decimal) => String(decimal).substring(2);

  useEffect(() => {
    if (isEmpty(responseData) && !isLoading) navigate("/");
  }, [responseData, navigate, isLoading]);

  const handleDetail = (idProduct) => {
    getProductsDetail(idProduct, navigate);
  };

  return (
    <section className="Products">
      {isLoading && (
        <Col lg={12} className="text-center">
          <Loader />
        </Col>
      )}
      {isError && <CardInfo error />}
      {isSuccess && responseData?.Code === "202" && <CardInfo />}
      {!isLoading && !isError && (
        <ol className="Products__List">
          {responseData?.items?.map((item, i) => (
            <li
              key={i}
              className="Products__ListItems"
              onClick={() => handleDetail(item?.id)}
            >
              <CardImg
                className="Products__ListItems--image"
                src={item?.picture}
                alt={`item${i}`}
              />
              <div className="Products__Title">
                <p className="Products__Title--price">
                  {formatValueToCurrency(item?.price?.amount || 0)}
                  <span>{decimals(item?.price?.decimals)}</span>
                  {item?.free_shipping && (
                    <HiOutlineTruck
                      className="Products__Title--icon"
                      title="Envio Gratis"
                      size={18}
                    />
                  )}
                </p>
                <p className="Products__Title--text">{item?.title}</p>
              </div>
              <div className="Products__Address">{item?.address}</div>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
};

CardInfo.defaultProps = {
  products: {},
  getProductsDetail: () => "",
};

Products.propTypes = {
  products: PropTypes.object.isRequired,
  getProductsDetail: PropTypes.oneOfType([PropTypes.func]).isRequired,
};

const mapStateToProps = (state) => ({
  products: state.storeApp.products,
});

const mapDispatchToProps = (dispatch) => ({
  getProductsDetail: (idProduct, navigate) =>
    dispatch(getProductsDetailAction(idProduct, navigate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
