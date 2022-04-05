import React from 'react';
import { Col, Container, Row, } from 'react-bootstrap';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import useData from './LoadData/LoadData';

const MyLineChart = () => {
          const [data, setData] = useData();
          return (
                    <Container>
                              <Row>
                                        <Col>
                                                  <h3 className='text-primary'>MONTH WISE SELL</h3>
                                                  <LineChart width={400} height={250} data={data}>
                                                            <Line type="monotone" stroke="#8884d8" ></Line>
                                                            <Line dataKey={'sell'}></Line>
                                                            <Tooltip></Tooltip>
                                                            <XAxis dataKey="month"> </XAxis>
                                                            <YAxis />
                                                  </LineChart>

                                        </Col>

                                        <Col>
                                                  <h3 className='text-primary'>Investment VS Revenue</h3>
                                                  <AreaChart
                                                            width={400}
                                                            height={400}
                                                            data={data}
                                                            margin={{
                                                                      top: 10,
                                                                      right: 30,
                                                                      left: 0,
                                                                      bottom: 0,
                                                            }}
                                                  >
                                                            <CartesianGrid strokeDasharray="3 3" />
                                                            <XAxis dataKey="month" />
                                                            <YAxis />
                                                            <Tooltip />
                                                            <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                                                            <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                                                  </AreaChart>
                                        </Col>

                              </Row>

                              <Row>
                                        <Col className='mt-5'>
                                                  <h3 className='text-primary'>Investment VS Revenue</h3>
                                                  <BarChart
                                                            width={400}
                                                            height={300}
                                                            data={data}
                                                            margin={{
                                                                      top: 20,
                                                                      right: 30,
                                                                      left: 20,
                                                                      bottom: 5,
                                                            }}
                                                  >
                                                            <CartesianGrid strokeDasharray="3 3" />
                                                            <XAxis dataKey="month" />
                                                            <YAxis datakey={'investment'} />
                                                            <Tooltip />
                                                            <Legend />
                                                            <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                                                            <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                                                  </BarChart>
                                        </Col>

                                        <Col className='mt-5'>
                                                  <h3 className='text-primary'>Investment VS Revenue</h3>
                                                  <PieChart width={400} height={400}>
                                                            <Pie data={data} dataKey={'investment'} cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                                                            <Pie data={data} dataKey={'revenue'} cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                                                            <Tooltip />
                                                  </PieChart>
                                        </Col>

                              </Row>
                    </Container >


          );
};

export default MyLineChart;