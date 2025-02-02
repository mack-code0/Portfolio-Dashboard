import styled from "styled-components";

const TableWrapper = styled.div`
    width: 100%;
    scrollbar-width: none;
    -ms-overflow-style: none;
    overflow-x: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
    
        
    table {
        width: 100%;
        min-width: 650px;
        border-left: 1px solid #66666626;
        border-right: 1px solid #66666626;
        thead tr {
            th {
                font-size: 14px;
                font-weight: 400;
                border: none;
                color: #666666;
                text-align: left;
                white-space: nowrap;
                height: 50px;
                border: 1px solid #66666626;
                padding: 0 15px;
                vertical-align: middle;
            }
        }
        tbody tr {
            td {
                min-width: 150px;
                font-weight: 400;
                font-size: 14px;
                padding: 0 15px;
                color: #F2F2F2;
                height: 55px;
                vertical-align: middle;
                white-space: nowrap;
                border-bottom: 1px solid #66666626;
                border-left: 1px solid #66666626;
            }
        }
    }
`

export default TableWrapper
