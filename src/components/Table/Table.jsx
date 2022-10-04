import DataTable from "react-data-table-component";
import PropTypes from "prop-types";

const Table = ({
  title,
  className,
  tableColumns,
  tableData,
  pagination,
  rowsPerPageText,
  selectAllRowsItem,
  selectAllRowsItemText,
  pageSize,
  paginationPerPage,
  noTableHead
}) => {
  const paginationOptions = {
    rowsPerPageText,
    rangeSeparatorText: "de",
    selectAllRowsItem,
    selectAllRowsItemText,
  };

  const defaultRowPerPage = [
    pageSize,
    pageSize * 3,
    pageSize * 5,
    pageSize * 8,
  ];

  return (
    <div className="table-responsive">
      <DataTable
        title={title}
        className={className}
        columns={tableColumns}
        data={tableData}
        pagination={pagination}
        paginationComponentOptions={paginationOptions}
        paginationRowsPerPageOptions={defaultRowPerPage}
        paginationPerPage={paginationPerPage}
        noDataComponent={<p>No hay información para mostrar</p>}
        noTableHead={noTableHead}
      />
    </div>
  );
};

Table.defaultProps = {
  title: "",
  className: "",
  tableColumns: [],
  tableData: [],
  pagination: false,
  rowsPerPageText: "Filas por página:",
  selectAllRowsItem: true,
  selectAllRowsItemText: "Todo",
  pageSize: 10,
  paginationPerPage: 10,
  noTableHead: false
};

Table.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  tableColumns: PropTypes.arrayOf(PropTypes.object),
  tableData: PropTypes.arrayOf(PropTypes.object),
  pagination: PropTypes.bool,
  rowsPerPageText: PropTypes.string,
  selectAllRowsItem: PropTypes.bool,
  selectAllRowsItemText: PropTypes.string,
  pageSize: PropTypes.number,
  paginationPerPage: PropTypes.number,
  noTableHead: PropTypes.bool
};

export default Table;
