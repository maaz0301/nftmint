import { Modal } from 'antd';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const MenuModal = ({ visible, onClose }) => {
  const router = useRouter();

  const handleProfileClick = () => {
    router.push('/dashboard/profile');
    onClose();
  };

  const handleSettingsClick = () => {
    router.push('/dashboard/settings');
    onClose();
  };

  const handleLogoutClick = () => {
    // Add logout logic here
    router.push('/login');
    onClose();
  };

  const MenuItem = ({ icon, text, onClick, textColor = '#ffffff' }) => (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
        padding: '12px 16px',
        color: textColor,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Image src={icon} width={20} height={20} alt={text} />
        <span style={{ fontSize: '16px', fontWeight: 600 }}>{text}</span>
      </div>
      <Image src="/assets/icons/menu-arrow.svg" width={15} height={15} alt="arrow" />
    </div>
  );

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      closable={false}
      centered
      width={250}
      className="custom-modal"
      // style={{
      //   borderRadius: '16px',
      //   overflow: 'hidden',
      //   padding: 0,
      //   top: 50,
       
      //   backgroundColor: 'transparent',
      // }}
            style={{
        backgroundColor: '#1E1E2F', // Dark background
        color: '#FFF',
        top: 50, // Position modal at the top
        right: 0, // Position modal at the top-right corner
        position: 'absolute', // Ensure absolute positioning for top-right
        paddingTop: '0', // Optional: remove top padding to make the header touch the top
        width:'200px'
      }}
      bodyStyle={{
        backgroundColor: '#071629',
        padding: 0,
        borderRadius: '16px',
      }}
    >
      <MenuItem icon="/assets/icons/user.svg" text="Profile" onClick={handleProfileClick} />
      <div style={{ borderBottom: '1px solid #2D3E50' }} />
      <MenuItem icon="/assets/icons/settingmenu.svg" text="Settings" onClick={handleSettingsClick} />
      <div style={{ borderBottom: '1px solid #2D3E50' }} />
      <MenuItem icon="/assets/icons/logout.svg" text="Logout" onClick={handleLogoutClick} textColor="#FF365E" />
    </Modal>
  );
};

export default MenuModal;
