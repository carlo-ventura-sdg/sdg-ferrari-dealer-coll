export const legendItems = [
    { label: "Delivered", color: "#4FC483" },
    { label: "Transit", color: "#1C3B8A" },
    { label: "Frozen", color: "#BDDAEC" },
    { label: "00", color: "#EFB166" },
    { label: "P", color: "#f88cd4" },
    { label: "W", color: "#AD6DCF" },
  ];
  
  export const mapStatusToLabel = (status) => {
    if (['10G', '10R', '10Gc', '20', '30', '40', '45', '50', '60', '64', '65','66','67', '70', '73','74','75','83', '85'].includes(status)) {
      return 'Frozen';
    }
    if (['90', '91', '92', '93', '94'].includes(status)) {
      return 'Transit';
    }
    if (status === '95') return 'Delivered';
    return status; 
  };
  