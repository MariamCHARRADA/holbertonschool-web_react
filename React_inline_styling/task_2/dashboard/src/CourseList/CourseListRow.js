import React from "react";
import PropTypes from "prop-types";
import { css, StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
  headerRow: {
    borderBottom: "1px solid lightgrey",
    backgroundColor: "#deb5b545",
  },
  bodyRow: {
    backgroundColor: "#f5f5f5ab",
  },
  th: {
    borderBottom: "1.5px solid lightgrey",
    textAlign: "left",
    padding: "5px",
  },
  thColSpan: {
    textAlign: "center",
    padding: "5px",
  },
  td: {
    textAlign: "left",
    padding: "5px",
  },
});

function CourseListRow({
  isHeader = false,
  textFirstCell,
  textSecondCell = null,
}) {
  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr className={css(styles.headerRow)}>
          <th colSpan="2" className={css(styles.thColSpan)}>
            {textFirstCell}
          </th>
        </tr>
      );
    } else {
      return (
        <tr className={css(styles.bodyRow)}>
          <th className={css(styles.th)}>{textFirstCell}</th>
          <th className={css(styles.th)}>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr className={css(styles.bodyRow)}>
        <td className={css(styles.td)}>{textFirstCell}</td>
        <td className={css(styles.td)}>{textSecondCell}</td>
      </tr>
    );
  }
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
