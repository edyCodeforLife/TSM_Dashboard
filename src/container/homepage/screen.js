import React, { useState } from "react";
import "../../components/app.scss";
import { Statistic, Card, Row, Col } from 'antd';
import { FallOutlined, RiseOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { PlayCircleFilled, HomeFilled } from '@ant-design/icons';
import SideMenu  from '../../components/pages-component/side-menu/index';
import Building from '../../components/pages-component/building/building';

function ScreenHomePage(props) {

	const { rowkey, gotoBuilding, dataSource, current, handleClick, pagination, loading, onChange, columns, buildingLength, highestCapacity, lowestCapacity } = props;

	const renderWelcomeDashboard = (text) => {
		return(
			<div onClick={gotoBuilding} className="welcomePage">
				<PlayCircleFilled style={{fontSize: 300, color: 'white', marginBottom: 25}} />
				<p style={{fontSize: 20, color: 'whitesmoke'}}>{text}</p>
			</div>
		)
	}

	const renderSummary = (buildingLength, highestCapacity, lowestCapacity) => {
		return(
			<React.Fragment>
				<p style={{fontSize: 20, color: 'whitesmoke', marginTop: 20}}>Summary</p>
				<div className="statisticContainer">
					<Row style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
						<Col span={7}>
							<Card>
								<Statistic
									title="Jumlah Gedung"
									value={buildingLength}
									valueStyle={{ color: '#1890FF' }}
									prefix={<HomeFilled />}
								/>
							</Card>
						</Col>
						<Col span={7} style={{margin: '0 10px'}}>
							<Card>
								<Statistic
									title="Kapasitas terbesar"
									value={highestCapacity}
									valueStyle={{ color: '#3f8600' }}
									prefix={<RiseOutlined  />}
								/>
							</Card>
						</Col>
						<Col span={7}>
							<Card>
								<Statistic
									title="Kapasitas terkecil"
									value={lowestCapacity}
									valueStyle={{ color: '#cf1322' }}
									prefix={<FallOutlined />}
								/>
							</Card>
						</Col>
					</Row>
				</div>
			</React.Fragment>
		)
	}

	const renderContent = (contentSub) => {
		switch(contentSub) {
			case 'sub0':
				return(renderWelcomeDashboard("Welcome to Dashboard PT. Tata Sarana Mandiri"));
			case 'sub1':
				return(renderSummary( buildingLength, highestCapacity, lowestCapacity ));
			case 'sub2':
				return(
					<Building
						rowKey={rowkey}
						dataSource={dataSource}
						pagination={pagination}
						loading={loading}
						onChange={onChange}
						columns={columns}
						{...props}
					/>
				);
			default:
				return(renderWelcomeDashboard("Welcome to Dashboard PT. Tata Sarana Mandiri"));
		}
	}

	return (
		<div className="containerScreen">
			<div className="dashboardContainer">
				<div style={{height: '-webkit-fill-available'}}>
					<SideMenu
						handleClick={handleClick}
						current={current}
						{...props}
					/>
				</div>
				<div style={{width: '100%', height: '-webkit-fill-available', background: '#001529'}}>
					{renderContent(current)}
				</div>
			</div>
		</div>
	);
	}
export default React.forwardRef(ScreenHomePage);
