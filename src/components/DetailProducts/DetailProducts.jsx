import React from "react";
import { Col, Row } from "reactstrap";
import { connect } from "react-redux";
import { RiReplyFill } from "react-icons/ri";
import PropTypes from "prop-types";
import { formatValueToCurrency } from "../../utils/utils";
import Loader from "../Loader/Loader";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import "./DetailProducts.scss";
import CardInfo from "../CardInfo/CardInfo";

const DetailProducts = ({ productDetail, products }) => {
  const { responseData, isLoading, isError, isSuccess } = productDetail;

  const condition = responseData.item?.condition === "new" ? "Nuevo" : "Usado";

  const decimals = String(responseData.item?.price?.decimals).substring(2);

  const handleBuy = () => {
    window.history.back();
  };

  return (
    <section className="DetailProducts">
      {isLoading && (
        <Col lg={12} className="text-center">
          <Loader />
        </Col>
      )}
      {!isLoading && isError && <CardInfo error />}
      {!isLoading && isSuccess && responseData.Code === '202' && <CardInfo/>}
      {!isLoading && !isError && (
        <>
          <Breadcrumbs data={products.responseData?.categories?.slice(0,5)} />
          <Row sm={12} className="DetailProducts__Container">
            <Col
              sm={7}
              className="DetailProducts__Item"
            >
              <div className="DetailProducts__Back" onClick={handleBuy}>
                <RiReplyFill
                  size={35}
                  color={"blue"}
                  className="DetailProducts__Back--btn"
                  title="Regresar"
                />
                <strong>Regresar</strong>
              </div>
              <div className="DetailProducts__Image">
                <img
                  className="DetailProducts__Item--image"
                  src={responseData.item?.picture}
                  alt={"producto"}
                />
              </div>
              <div className="DetailProducts__Description">
                <strong>Descripción del producto</strong>
                <p>
                  {responseData.item?.description ||
                    "Este producto no cuenta con descripción."}
                </p>
              </div>
            </Col>
            <Col sm={5} className="DetailProducts__Title">
              <p className="DetailProducts__Title--condition">
                {condition} - {responseData.item?.sold_quantity} vendidos
              </p>
              <p className="DetailProducts__Title--title">
                {responseData.item?.title}
              </p>
              <p className="DetailProducts__Title--price">
                {formatValueToCurrency(responseData.item?.price.amount || 0)}
                <span>{decimals}</span>
              </p>
              <button className="DetailProducts__Button btn btn-primary">
                Comprar
              </button>
            </Col>
          </Row>
        </>
      )}
    </section>
  );
};

DetailProducts.propTypes = {
  productDetail: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

const mapStateToProps = (state) => ({
  productDetail: state.storeApp.productDetail,
  products: state.storeApp.products,
});

export default connect(mapStateToProps)(DetailProducts);
