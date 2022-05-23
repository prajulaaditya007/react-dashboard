import React from 'react';
import {
    GridComponent,
    ColumnsDirective,
    ColumnDirective,
    Inject,
    Page,
    Selection,
    Edit,
    Toolbar,
    Sort,
    Filter
} from '@syncfusion/ej2-react-grids';

import {customersData, customersGrid, employeesData, employeesGrid} from "../data/dummy";
import {Header} from '../components'

const Customers = () => {
    return (
        <>
            <div className="m-2 p-2 md:m-10 md:p-10 bg-white rounded-3xl">
                <Header category="Page" title="Customers"/>
                <GridComponent
                    dataSource={customersData}
                    allowPaging
                    toolbar={["Delete"]}
                    editSettings={{allowDeleting: true, allowEditing: true}}
                    width="auto"
                >
                    <ColumnsDirective>
                        {customersGrid.map((item, index) => (<ColumnDirective key={index} {...item} />))}
                    </ColumnsDirective>
                    <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]}/>
                </GridComponent>
            </div>
        </>
    );
};

export default Customers;
