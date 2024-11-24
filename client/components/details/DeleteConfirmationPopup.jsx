import React, { useState } from "react";
import { Modal } from "antd";

const DeleteConfirmationPopup = ({isModalVisible, setIsModalVisible, handleDelete}) => {

  const handleOk = () => {    
    handleDelete();
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>      

      {/* Confirmation Modal */}
      <Modal
        title="Confirm Deletion"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Delete"
        cancelText="Cancel"
        centered="true"
        okButtonProps={{
            style: { backgroundColor: "red", borderColor: "red", color: "white" }
          }}
      >
        <p>Are you sure you want to delete this item?</p>
      </Modal>
    </div>
  );
};

export default DeleteConfirmationPopup;
