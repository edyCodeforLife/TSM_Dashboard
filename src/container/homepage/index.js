import React, { useEffect, useState, useRef } from "react";
import "../../components/app.scss";
import { map, sortBy, min, max } from 'lodash';
import axios from "axios";
import ScreenHomePage from './screen';

function _HomePage(props) {

	const [ data, setData ] = useState([]);
	const [ pagination, setPagination ] = useState({current: 1, pageSize: 7});
	const [ loading, setLoading ] = useState(false);
	const [ current, setCurrent ] = useState('sub0');
	const [ lowestCapacity, setLowestCapacity ] = useState(0);
	const [ highestCapacity, setHighestCapacity ] = useState(0);

	const fetch = async(params = {}) => {
		setLoading(true);
		const url = "https://virtserver.swaggerhub.com/swaggerpayment/GetDataBuilding/1.0.0/building_data";
		await axios.get(url).then(res => {
			setLoading(false);
			let sortedById = sortBy(res.data, 'id')
			setData(sortedById);
			setPagination({
				...params.pagination,
				total:res.data.length
			});
			if (res.data.length > 0) {
				const dataCapacity = map(res.data, item => {
					return item.allowed_capacity;
				});
				setLowestCapacity(min(dataCapacity));
				setHighestCapacity(max(dataCapacity))
			}
		})
	};

	const handleTableChange = (pagination, filters, sorter) => {
		fetch({
		  sortField: sorter.field,
		  sortOrder: sorter.order,
		  pagination,
		  ...filters,
		});
	};

	useEffect(() => {
    	fetch({ pagination });
	}, [])

	const tabHeader = [
		{
			title: 'ID Gedung',
			dataIndex: 'id',
			key: 'id',
		},
		{
			title: 'Nama',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: 'No. Telp',
			dataIndex: 'phone_number',
			key: 'phone_number',
		},
		{
			title: 'Alamat',
			dataIndex: 'address',
			key: 'address',
		},
		{
			title: 'Kapasitas',
			dataIndex: 'allowed_capacity',
			key: 'allowed_capacity',
		},
		{
			title: 'Lokasi',
			dataIndex: 'longitude',
			key: 'longitude',
		},
	];

	const handleClick = (e) => {
		setCurrent(e.key)
	};

	const gotoBuilding = () => {
		setCurrent('sub2')
	}

  return (
		<ScreenHomePage
			rowKey={record => record.id}
			dataSource={data}
			pagination={pagination}
			loading={loading}
			onChange={handleTableChange}
			columns={tabHeader}
			handleClick={(e) => handleClick(e)}
			current={current}
			gotoBuilding={gotoBuilding}
			buildingLength={data.length}
			lowestCapacity={lowestCapacity}
			highestCapacity={highestCapacity}
			{...props}
		/>
  )
}
export const HomePage = React.memo((_HomePage));
