import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Col, CardImg } from "reactstrap";
import Loader from "../Loader/Loader";
import { getProductsDetail as getProductsDetailAction } from "../../actions/storeApp/storeApp.action";
import { formatValueToCurrency } from "../../utils/utils.js";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { FcApproval } from "react-icons/fc";
import "./Products.scss";
import CardInfo from "../CardInfo/CardInfo";

const Products = ({ products, getProductsDetail }) => {
  const navigate = useNavigate();
  const { responseData, isLoading, isError, isSuccess } = products;

  const handleDetail = (idProduct) => {
    getProductsDetail(idProduct, navigate);
  };

  const decimals = (decimal) => String(decimal).substring(2);

  return (
    <section className="Products">
      {isLoading && (
        <Col lg={12} className="text-center">
          <Loader />
        </Col>
      )}
      {isError && <CardInfo error />}
      {isSuccess && responseData.Code === '202' && <CardInfo/>}
      {!isLoading && !isError && (
        <>
          <Breadcrumbs data={responseData?.categories?.slice(0,5)} />
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
                      <FcApproval
                        className="Products__Icon"
                        title="Envio Gratis"
                      />
                    )}
                  </p>
                  <p className="Products__Title--text">{item?.title}</p>
                </div>
                <div className="Products__Address">{item?.address}</div>
              </li>
            ))}
          </ol>
        </>
      )}
    </section>
  );
};

Products.propTypes = {
  products: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

const mapStateToProps = (state) => ({
  products: state.storeApp.products,
});

const mapDispatchToProps = (dispatch) => ({
  getProductsDetail: (idProduct, navigate) =>
    dispatch(getProductsDetailAction(idProduct, navigate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
