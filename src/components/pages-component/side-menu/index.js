import React, { memo, useState } from "react";
import { Menu } from 'antd';
import { AlignRightOutlined, HomeOutlined, MinusSquareOutlined } from '@ant-design/icons';

function SideMenu(props){

	const { Item } = Menu;
	const [ current, setCurrent ] = useState('1');

	const handleClick = (e) => {
		console.log(e)
		setCurrent(e.key)
	};

	return(
		<div style={{height: '-webkit-fill-available'}}>
			<Menu
				theme={'dark'}
				onClick={handleClick}
				style={{ width: 256, height: '-webkit-fill-available' }}
				defaultOpenKeys={['sub1']}
				selectedKeys={[current]}
				mode="inline"
				>

					<Item style={{fontSize: 20}}>
						<span style={{marginRight: 90 }}>Dashboard</span>
						<AlignRightOutlined/>
					</Item>
					<Item key="sub1" icon={<HomeOutlined />} title="Dashboard">
						Dashboard
					</Item>
					<Item key="sub2" icon={<MinusSquareOutlined/>} title="Gedung">
						Gedung
					</Item>
			</Menu>
		</div>
	)
}
export default memo(SideMenu);