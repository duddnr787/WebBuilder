import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import 'styles/Editor/SideBar.css';
import { useSelector } from 'react-redux';

const SideBar = ({ sideBarOpen, setSideBarOpen, blockStyle, setBlockStyle, setCheckBtn, checkBtn }) => {
  const [iconColor, setIconColor] = useState('#8f8f8f');
  const blockList = useSelector((state) => state.editor.blockList);

  const handleWidthChange = () => {
    const blockId = sideBarOpen.block_id;
    if (blockStyle.some((block) => block.block_id === blockId)) {
      setBlockStyle((prev) => prev.map((block) => (block.block_id === blockId ? { ...block, style: { ...block.style, maxWidth: checkBtn ? '100%' : '1240px' } } : block)));
      return true;
    }
  };

  const handleTopPaddingChange = (e) => {
    const blockId = sideBarOpen.block_id;
    if (blockStyle.some((block) => block.block_id === blockId)) {
      setBlockStyle((prev) => prev.map((block) => (block.block_id === blockId ? { ...block, style: { ...block.style, paddingTop: `${e.target.value}px` } } : block)));
      return true;
    }
  };

  const handleBottomPaddingChange = (e) => {
    const blockId = sideBarOpen.block_id;
    if (blockStyle.some((block) => block.block_id === blockId)) {
      setBlockStyle((prev) => prev.map((block) => (block.block_id === blockId ? { ...block, style: { ...block.style, paddingBottom: `${e.target.value}px` } } : block)));
    }
  };
  useEffect(() => {
    handleWidthChange();
  }, [checkBtn]);

  useEffect(() => {
    const block = blockList.find((block) => block.block_id === sideBarOpen.block_id);
    if (block) {
      const style = JSON.parse(block.block_style);
      if (style.style.maxWidth === '100%') {
        setCheckBtn(true);
      } else if (style.style.maxWidth === '1240px') {
        setCheckBtn(false);
      }
    }
  }, [blockList, sideBarOpen]);

  return (
    <div className='subMenu sub_menu' style={{ display: 'block' }}>
      <div className='title_wrap'>
        <h3>블록 설정</h3>
        <FontAwesomeIcon
          icon={faTimes}
          style={{ color: iconColor, cursor: 'pointer' }}
          onClick={() => setSideBarOpen(!sideBarOpen)}
          size='2x'
          onMouseEnter={() => setIconColor('#f3f3f3')}
          onMouseLeave={() => setIconColor('#8f8f8f')}
        />
      </div>
      <div className='widthSet_wrap' onChange={(e) => setCheckBtn((prevCheckBtn) => !prevCheckBtn)}>
        {/* <input type='checkbox' checked={checkBtn} /> */}
        <p>화면 너비에 맞추기</p>
      </div>
      <div style={{ marginTop: '10px' }}>
        <p className='title1'>패딩 설정</p>
      </div>
      <ul className='sub_menu_list v2'>
        <li>
          <p className='title1' style={{ width: '100%' }}>
            상
            <span id='paddingTopVal' className='num'>
              {blockStyle.find((block) => block.block_id === sideBarOpen.block_id)?.style.paddingTop || 0}
            </span>
          </p>
          <div style={{ padding: '5px 0 0 10px', marginBottom: '10px' }}>
            <input
              type='range'
              className='radioCheckSelect range_style1'
              name='padding_top'
              min='0'
              max='400'
              step='10'
              value={Number(blockStyle.find((block) => block.block_id === sideBarOpen.block_id)?.style.paddingTop.replace('px', '')) || 0}
              onChange={handleTopPaddingChange}
            />
            <ol className='range_datalist'>
              <li>0</li>
              <li>200</li>
              <li>400</li>
            </ol>
          </div>
        </li>
        <li>
          <p className='title1' style={{ width: '100%' }}>
            하
            <span id='paddingBottomVal' className='num'>
              {blockStyle.find((block) => block.block_id === sideBarOpen.block_id)?.style.paddingBottom || 0}
            </span>
          </p>
          <div style={{ padding: '5px 0 0 10px' }}>
            <input
              type='range'
              className='radioCheckSelect range_style1'
              name='padding_bottom'
              min='0'
              max='400'
              step='10'
              value={Number(blockStyle.find((block) => block.block_id === sideBarOpen.block_id)?.style.paddingBottom.replace('px', '')) || 0}
              onChange={handleBottomPaddingChange}
            />
            <ol className='range_datalist'>
              <li>0</li>
              <li>200</li>
              <li>400</li>
            </ol>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
