import React, { memo, useState } from "react";
import { Table } from 'antd';

function Building(props){

	const { rowkey, dataSource, pagination, loading, onChange, columns } = props;
	return(
		<div className="buildingContainer">
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