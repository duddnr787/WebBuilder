import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateList } from 'redux/editorSlice';
import 'styles/Modal/LinkModal.css';

const LinkModal = ({ block_id, idx, setIsOpen, isOpen, LinkDic }) => {
  const [isNoLinkChecked, setNoLinkChecked] = useState(true);
  const [isInternalLinkChecked, setInternalLinkChecked] = useState(false);
  const [isUrlChecked, setUrlChecked] = useState(false);
  const [selectedLink, setSelectedLink] = useState('');
  const [inputURL, setInputURL] = useState('');
  const [validationError, setValidationError] = useState('');

  const { secondList } = useSelector((state) => state.menu);
  const blocks = useSelector(state => state.editor.blockList);

  const dispatch = useDispatch();

  const handleNoLinkCheckboxChange = () => {
    setNoLinkChecked(true);
    setInternalLinkChecked(false);
    setUrlChecked(false);
    setValidationError(''); 
    setInputURL('');
  };

  const handleInternalLinkCheckboxChange = () => {
    setNoLinkChecked(false);
    setInternalLinkChecked(true);
    setUrlChecked(false);
    setValidationError(''); 
    setInputURL('');
  };

  const handleUrlCheckboxChange = () => {
    setNoLinkChecked(false);
    setInternalLinkChecked(false);
    setUrlChecked(true);
    setValidationError(''); 
    setInputURL('');
  };

  const updateLink = (images, href) => {
    if (LinkDic.idx === undefined) {
      return images.map(image => ({ ...image, href }));
    } else {
      return images.map((image, i) =>
        i === LinkDic.idx ? { ...image, href } : image
      );
    }
  }

  const updateBlockLink = (link) => {
    dispatch(updateList(blocks.map(block => {
      if (block.block_id === block_id) {
        return {
          ...block,
          content: {
            ...block.content,
            images: updateLink(block.content.images, link)
          }
        }
      }
      return block;
    })));
  };

  const handleOptionChange = (e) => {
    const selectedPage = secondList.find((item) => item.idx === Number(e.target.value));
    if (selectedPage) {
      setSelectedLink(selectedPage.link);
    }
  };

  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <div className='modal_infor_box'>
          <span>링크 설정</span>
        </div>
        <div className={`modal_link_check ${isNoLinkChecked ? 'checked' : ''}`} style={{ marginBottom: '30px' }}>
          <input type='checkbox' className='notUse' checked={isNoLinkChecked} onChange={handleNoLinkCheckboxChange} />
          <label className={isNoLinkChecked ? '' : 'strikethrough'}>링크 없음</label>
        </div>
        <div className={`modal_link_check ${isInternalLinkChecked ? 'checked' : ''}`} style={{ flexDirection: 'column' }}>
          <div style={{ marginBottom: '10px' }}>
            <input type='checkbox' className='notUse' checked={isInternalLinkChecked} onChange={handleInternalLinkCheckboxChange} />
            <label className={isInternalLinkChecked ? '' : 'strikethrough'}>내부 링크 페이지</label>
          </div>
          <select className='select_box' disabled={!isInternalLinkChecked} onChange={handleOptionChange}>
            <option className='first_option' value=''>
              링크할 페이지를 선택하세요
            </option>
            {secondList.map((item) => (
              <option key={item.title} value={item.idx}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
        <div className={`modal_link_check ${isUrlChecked ? 'checked' : ''}`} style={{ flexDirection: 'column' }}>
          <div style={{ marginBottom: '10px' }}>
            <input type='checkbox' className='notUse' checked={isUrlChecked} onChange={handleUrlCheckboxChange} />
            <label className={isUrlChecked ? '' : 'strikethrough'}>URL 입력</label>
          </div>
          <input type='text' className='pageInput' placeholder='https://로 시작되는 링크 주소 입력' disabled={isNoLinkChecked} style={{ marginBottom: '40px', paddingLeft: '20px' }} onChange={(e) => setInputURL(e.target.value)} value={inputURL}  />
        </div>
        {
          validationError && 
          <div style={{ color: '#EE7D00', paddingLeft:'22px',position:'relative', top:'-35px' }}>{validationError}</div>
        }
        <div className='modal_btn_box'>
          <button onClick={() => setIsOpen(false)}>닫기</button>
          <button 
            onClick={() => {
              if (isUrlChecked) {
                if (inputURL.startsWith('https://')) {
                  updateBlockLink(inputURL);
                  console.log('URL 디스패치 완료');
                  setValidationError('');
                } else {
                  setValidationError('URL은 "https://"로 시작해야 합니다.');
                  return;
                }
              } else if (selectedLink) {
                const link = `/page/${selectedLink}`;
                updateBlockLink(link);
                console.log('내부 링크 디스패치 완료');
              }
              setIsOpen(false);
            }}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkModal;
