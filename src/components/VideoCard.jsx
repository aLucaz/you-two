import React from 'react';

import {demoThumbnailUrl, demoChannelUrl, demoVideoTitle, demoVideoUrl} from '../utils/constants';
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {CheckCircle} from "@mui/icons-material";

const VideoCard = ({video: {id : {videoId}, snippet}}) => {
  return (
    <Card sx={{width: {md: '320px', xs:'100%'}, boxShadow: 'none', borderRadius: 0}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{width: 350, height: 180}}
        />
        <CardContent
          sx={{backgroundColor: '#1e1e1e', height: '110px'}}
        >
          <Typography variant={'subtitle1'} fontWeight={'bold'} color={'white'}>
            {snippet?.title || demoVideoTitle}
          </Typography>
          <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
            <Typography variant={'subtitle2'} fontWeight={'bold'} color={'gray'}>
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircle sx={{fontSize: 12, color: 'gray', ml: '5px'}}/>
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  );
};

export default VideoCard;
