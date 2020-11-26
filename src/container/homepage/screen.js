import React, { useState } from "react";
import "../../components/app.scss";
import { Drawer, Card, Button, Skeleton  } from 'antd';
import SideMenu  from '../../components/pages-component/side-menu/index';
import Building from '../../components/pages-component/building/building';

function ScreenHomePage(props) {

	const { rowkey, dataSource, pagination, loading, onChange, columns } = props;
	return (
		<div className="containerScreen">
			<div className="dashboardContainer">
				<div style={{height: '-webkit-fill-available'}}>
					<SideMenu
					/>
				</div>
				<div style={{width: '100%', height: '-webkit-fill-available', background: '#001529'}}>
					<Building
						rowKey={rowkey}
						dataSource={dataSource}
						pagination={pagination}
						loading={loading}
						onChange={onChange}
						columns={columns}
						{...props}
					/>
				</div>
			</div>
		</div>
	);
	}
export default React.forwardRef(ScreenHomePage);
