import { Table, Switch, Tag, Button } from 'antd';
import { getClient } from '../../Utils/apiRequest'
import { useEffect, useState } from 'react'

function ListContent() {
    const [list, setList] = useState(null);

    useEffect(() => {
        const getClients = async () => {
            const data = await getClient()
            const clientList = data.map(e => ({ key: e.id, ...e }))
            setList(clientList);
        }
        if (list === null) {
            getClients();
        }
    }, [list])


    const columns = [
        {
            title: 'Prospective Client Name',
            dataIndex: 'name',
            sorter: {
                compare: (a, b) => a.name.localeCompare(b.name),
                multiple: 6,
            }
        },
        {
            title: 'Title',
            dataIndex: 'title',
            sorter: {
                compare: (a, b) => a.title.localeCompare(b.title),
                multiple: 3,
            },
        },
        {
            title: 'Email',
            dataIndex: 'email',
            sorter: {
                compare: (a, b) => a.email.localeCompare(b.email),
                multiple: 2,
            },
        },
        {
            title: 'Location',
            dataIndex: 'location',
            sorter: {
                compare: (a, b) => a.location.localeCompare(b.location),
                multiple: 1,
            },
        }, {
            title: 'Last Interaction',
            dataIndex: 'lastInteraction',
            sorter: {
                compare: (a, b) => a.lastInteraction - b.lastInteraction,
                multiples: 4,
            },
        }, {
            title: 'Nurturing',
            dataIndex: 'nurturing',
            render: (a) => {
                return <Switch checked={a} />
            }

        }, {
            title: 'Growth Status',
            dataIndex: 'growthStatus',
            render: (a) => {
                switch (a) {
                    case "Grown":
                        return <Tag color="green">{a}</Tag>
                    case "Growing":
                        return <Tag color="cyan">{a}</Tag>
                    case "Stuck":
                        return <Tag color="orange">{a}</Tag>
                    default:
                        return <Tag color="red">{a}</Tag>
                }
            }
        }
    ];

    const [state, setState] = useState({
        selectedRowKeys: [],
        loading: false,
    });

    const start = () => {
        setState({ loading: true });
        setTimeout(() => {
            setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000);
    };

    console.log(state);

    const onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        setState({ selectedRowKeys });
    };

    const { loading, selectedRowKeys } = state;

    const rowSelection = () => ({
        selectedRowKeys,
        onChange: onSelectChange
    });

    let hasSelected = selectedRowKeys.length > 0;


    return (
        <>
            <div className="actions">
                <p>Showing 10 of {list?.length} seeds</p>
                <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading} style={{ width: '200px' }}>
                    Delete
                </Button>
            </div>
            <Table rowSelection={{ rowSelection }} columns={columns} dataSource={list} />
        </>
    )
}
export default ListContent;