import React, { memo } from "react";
import { Table, Row, Col } from 'antd';
function Building(props){

	const { rowkey, dataSource, pagination, loading, onChange, columns } = props;
	return(
		<div className="buildingContainer">
			<Row>
				<Col span={24} style={{textAlign: 'center'}}>
					<p style={{fontSize: 20, color: 'whitesmoke'}}>Tabel Gedung</p>
				</Col>
			</Row>

			<Table
				bordered
				rowKey={rowkey}
				dataSource={dataSource}
				pagination={pagination}
				loading={loading}
				onChange={onChange}
				columns={columns}
			/>
		</div>
	)
}
export default memo(Building);