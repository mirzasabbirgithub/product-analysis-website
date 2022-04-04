import React from 'react';
import { Col, Container, Row, } from 'react-bootstrap';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useData from './LoadData/LoadData';

const MyLineChart = () => {
          const [data, setData] = useData();
          return (
                    <Container>
                              <Row>
                                        <Col>
                                                  <h3 className='text-primary'>MONTH WISE SELL</h3>
                                                  <LineChart width={600} height={250} data={data}>
                                                            <Line type="monotone" stroke="#8884d8" ></Line>
                                                            <Line dataKey={'sell'}></Line>
                                                            <Tooltip></Tooltip>
                                                            <XAxis dataKey="month"> </XAxis>
                                                            <YAxis />
                                                  </LineChart>

                                        </Col>

                                        <Col>
                                                  <h3 className='text-primary'>Investment VS Revenue</h3>

                                                  <BarChart
                                                            width={500}
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
                              </Row>
                    </Container >


          );
};

export default MyLineChart;