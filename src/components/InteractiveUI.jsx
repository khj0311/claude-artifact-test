import { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle, X, Menu, User, Settings, Home, CreditCard, Bell } from 'lucide-react';

const InteractiveUI = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [showSidebar, setShowSidebar] = useState(true);
  const [notification, setNotification] = useState(null);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  
  // 알림 표시 함수
  const showNotification = (type, message) => {
    setNotification({ type, message });
    // 3초 후 알림 사라짐
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };
  
  // 데이터 로딩 시뮬레이션
  const simulateLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showNotification('success', '데이터가 성공적으로 로드되었습니다!');
    }, 1500);
  };
  
  useEffect(() => {
    // 컴포넌트 마운트 시 로딩 시뮬레이션
    simulateLoading();
  }, []);
  
  // 다크모드 클래스
  const bgClass = darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800';
  const sidebarClass = darkMode ? 'bg-gray-800' : 'bg-gray-100';
  const buttonClass = darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600';

  return (
    <div className={`min-h-screen ${bgClass} transition-colors duration-300`}>
      {/* 헤더 */}
      <header className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-4 flex justify-between items-center transition-colors duration-300`}>
        <div className="flex items-center">
          <button 
            className="mr-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <Menu size={24} />
          </button>
          <h1 className="text-xl font-bold">인터랙티브 UI 데모</h1>
        </div>
        <div className="flex items-center">
          <div className="flex items-center mr-4">
            <span className="mr-2">다크모드</span>
            <button
              className={`w-12 h-6 rounded-full ${darkMode ? 'bg-blue-600' : 'bg-gray-300'} flex items-center transition-colors duration-300 focus:outline-none`}
              onClick={() => setDarkMode(!darkMode)}
            >
              <span
                className={`bg-white w-5 h-5 rounded-full shadow transform transition-transform duration-300 ${
                  darkMode ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
            <User size={24} />
          </button>
        </div>
      </header>
      
      <div className="flex h-screen">
        {/* 사이드바 */}
        {showSidebar && (
          <div 
            className={`w-64 ${sidebarClass} p-4 transition-all duration-300 ease-in-out transform`}
          >
            <nav>
              <ul className="space-y-2">
                {[
                  { id: 'home', label: '홈', icon: <Home /> },
                  { id: 'profile', label: '프로필', icon: <User /> },
                  { id: 'settings', label: '설정', icon: <Settings /> },
                  { id: 'billing', label: '결제', icon: <CreditCard /> },
                  { id: 'notifications', label: '알림', icon: <Bell /> }
                ].map(item => (
                  <li key={item.id}>
                    <button
                      className={`flex items-center w-full p-3 rounded-lg transition-colors duration-200 ${
                        activeTab === item.id 
                          ? (darkMode ? 'bg-gray-700 text-white' : 'bg-blue-100 text-blue-700') 
                          : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                      onClick={() => {
                        setActiveTab(item.id);
                        showNotification('info', `${item.label} 페이지로 이동했습니다.`);
                      }}
                    >
                      <span className="mr-3">{item.icon}</span>
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
        
        {/* 메인 콘텐츠 */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6">
              {activeTab === 'home' && '홈'}
              {activeTab === 'profile' && '프로필'}
              {activeTab === 'settings' && '설정'}
              {activeTab === 'billing' && '결제'}
              {activeTab === 'notifications' && '알림'}
            </h2>
            
            {/* 로딩 인디케이터 */}
            {loading && (
              <div className="flex justify-center mb-6">
                <div className={`animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 ${darkMode ? 'border-blue-400' : 'border-blue-700'}`}></div>
              </div>
            )}
            
            <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}>
              {activeTab === 'home' && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">환영합니다!</h3>
                  <p className="mb-4">이 데모는 React와 Tailwind CSS를 사용한 인터랙티브 UI 컴포넌트를 보여줍니다.</p>
                  <p className="mb-4">사이드바 메뉴를 클릭하여 다른 페이지를 탐색해보세요.</p>
                  <button 
                    className={`${buttonClass} text-white px-4 py-2 rounded-lg transition-colors duration-200`}
                    onClick={() => showNotification('success', '버튼이 클릭되었습니다!')}
                  >
                    알림 표시하기
                  </button>
                </div>
              )}
              
              {activeTab === 'profile' && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">프로필 페이지</h3>
                  <p>여기서 프로필을 관리할 수 있습니다.</p>
                </div>
              )}
              
              {activeTab === 'settings' && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">설정 페이지</h3>
                  <p>다양한 설정을 변경할 수 있습니다.</p>
                </div>
              )}
              
              {activeTab === 'billing' && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">결제 페이지</h3>
                  <p>결제 정보를 관리할 수 있습니다.</p>
                </div>
              )}
              
              {activeTab === 'notifications' && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">알림 페이지</h3>
                  <p>알림 설정을 관리할 수 있습니다.</p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
      
      {/* 알림 토스트 */}
      {notification && (
        <div 
          className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg flex items-center ${
            notification.type === 'success' ? 'bg-green-100 border-l-4 border-green-500' :
            notification.type === 'error' ? 'bg-red-100 border-l-4 border-red-500' :
            'bg-blue-100 border-l-4 border-blue-500'
          } animate-fade-in-up`}
          style={{
            animation: 'fadeInUp 0.3s ease-out'
          }}
        >
          <div className="mr-3">
            {notification.type === 'success' && <CheckCircle className="text-green-500" />}
            {notification.type === 'error' && <AlertCircle className="text-red-500" />}
            {notification.type === 'info' && <AlertCircle className="text-blue-500" />}
          </div>
          <div className="mr-2">
            <p className={`font-medium ${
              notification.type === 'success' ? 'text-green-800' :
              notification.type === 'error' ? 'text-red-800' :
              'text-blue-800'
            }`}>
              {notification.message}
            </p>
          </div>
          <button 
            className="ml-auto text-gray-400 hover:text-gray-600"
            onClick={() => setNotification(null)}
          >
            <X size={18} />
          </button>
        </div>
      )}
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default InteractiveUI;