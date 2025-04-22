import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DataVisualizationDemo = () => {
  const [chartType, setChartType] = useState('line');
  
  // 샘플 데이터
  const data = [
    { name: '1월', 방문자: 4000, 구매: 2400 },
    { name: '2월', 방문자: 3000, 구매: 1398 },
    { name: '3월', 방문자: 2000, 구매: 9800 },
    { name: '4월', 방문자: 2780, 구매: 3908 },
    { name: '5월', 방문자: 1890, 구매: 4800 },
    { name: '6월', 방문자: 2390, 구매: 3800 },
    { name: '7월', 방문자: 3490, 구매: 4300 },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">데이터 시각화 데모</h1>
      
      <div className="mb-4 flex justify-center">
        <button
          className={`mr-2 px-4 py-2 rounded-lg ${chartType === 'line' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setChartType('line')}
        >
          라인 차트
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${chartType === 'bar' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setChartType('bar')}
        >
          바 차트
        </button>
      </div>
      
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === 'line' ? (
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="방문자" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="구매" stroke="#82ca9d" />
            </LineChart>
          ) : (
            <BarChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="방문자" fill="#8884d8" />
              <Bar dataKey="구매" fill="#82ca9d" />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
      
      <div className="mt-6 p-4 border rounded-lg">
        <h2 className="text-xl font-semibold mb-4">데이터 테이블</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">월</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">방문자</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">구매</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.방문자}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.구매}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataVisualizationDemo;