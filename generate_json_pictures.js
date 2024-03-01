const fs = require('fs');
const path = require('path');

const paths = [
  
  {
    folderPath: 'dist/Fetes/100_ans/maxi/',
    jsonFilePath: 'dist/Fetes/100_ans/maxi/photos.json',
    filename: '/Fetes/100_ans/maxi/'
  },
  {
    folderPath: 'dist/Voyages/Sardaigne2001/maxi/',
    jsonFilePath: 'dist/Voyages/Sardaigne2001/maxi/photos.json',
    filename: '/Voyages/Sardaigne2001/maxi/'
  },
  {
    folderPath: 'dist/Voyages/Cuba2001/maxi/',
    jsonFilePath: 'dist/Voyages/Cuba2001/maxi/photos.json',
    filename: '/Voyages/Cuba2001/maxi/'
  },
  {
    folderPath: 'dist/Voyages/Alpes2002/maxi/',
    jsonFilePath: 'dist/Voyages/Alpes2002/maxi/photos.json',
    filename: '/Voyages/Alpes2002/maxi/'
  },
  {
    folderPath: 'dist/Voyages/Sardaigne2003/maxi/',
    jsonFilePath: 'dist/Voyages/Sardaigne2003/maxi/photos.json',
    filename: '/Voyages/Sardaigne2003/maxi/'
  },  
  {
    folderPath: 'dist/Voyages/Auvergne2003/maxi/',
    jsonFilePath: 'dist/Voyages/Auvergne2003/maxi/photos.json',
    filename: '/Voyages/Auvergne2003/maxi/'
  },
  {
    folderPath: 'dist/Voyages/Maurice2002/maxi/',
    jsonFilePath: 'dist/Voyages/Maurice2002/maxi/photos.json',
    filename: '/Voyages/Maurice2002/maxi/'
  },
  {
    folderPath: 'dist/Voyages/Nianing2003/maxi/',
    jsonFilePath: 'dist/Voyages/Nianing2003/maxi/photos.json',
    filename: '/Voyages/Nianing2003/maxi/'
  },
  {
    folderPath: 'dist/Voyages/Nianing2004/maxi/',
    jsonFilePath: 'dist/Voyages/Nianing2004/maxi/photos.json',
    filename: '/Voyages/Nianing2004/maxi/'
  },
  {
    folderPath: 'dist/Voyages/Alpes2005/maxi/',
    jsonFilePath: 'dist/Voyages/Alpes2005/maxi/photos.json',
    filename: '/Voyages/Alpes2005/maxi/'
  },
  {
    folderPath: 'dist/Voyages/Nianing2005/maxi1/',
    jsonFilePath: 'dist/Voyages/Nianing2005/maxi1/photos.json',
    filename: '/Voyages/Nianing2005/maxi1/'
  },
  {
    folderPath: 'dist/Voyages/Nianing2005/maxi2/',
    jsonFilePath: 'dist/Voyages/Nianing2005/maxi2/photos.json',
    filename: '/Voyages/Nianing2005/maxi2/'
  },
  {
    folderPath: 'dist/Voyages/Indonesie2006/maxi/',
    jsonFilePath: 'dist/Voyages/Indonesie2006/maxi/photos.json',
    filename: '/Voyages/Indonesie2006/maxi/'
  },
  {
    folderPath: 'dist/Voyages/Namibie2006/maxi/',
    jsonFilePath: 'dist/Voyages/Namibie2006/maxi/photos.json',
    filename: '/Voyages/Namibie2006/maxi/'
  },
  {
    folderPath: 'dist/Voyages/Nianing2006/maxi/',
    jsonFilePath: 'dist/Voyages/Nianing2006/maxi/photos.json',
    filename: '/Voyages/Nianing2006/maxi/'
  },
  {
    folderPath: 'dist/Voyages/Safaga2007/maxi/',
    jsonFilePath: 'dist/Voyages/Safaga2007/maxi/photos.json',
    filename: '/Voyages/Safaga2007/maxi/'
  },
  {
    folderPath: 'dist/Voyages/Madagascar2007/maxi/',
    jsonFilePath: 'dist/Voyages/Madagascar2007/maxi/photos.json',
    filename: '/Voyages/Madagascar2007/maxi/'
  },
  {
    folderPath: 'dist/Voyages/Tibet2007/maxi/',
    jsonFilePath: 'dist/Voyages/Tibet2007/maxi/photos.json',
    filename: '/Voyages/Tibet2007/maxi/'
  },
  {
    folderPath: 'dist/Voyages/Egypte2007/maxi/',
    jsonFilePath: 'dist/Voyages/Egypte2007/maxi/photos.json',
    filename: '/Voyages/Egypte2007/maxi/'
  },
  {
    folderPath: 'dist/Voyages/Nianing2007/maxi/',
    jsonFilePath: 'dist/Voyages/Nianing2007/maxi/photos.json',
    filename: '/Voyages/Nianing2007/maxi/'
  },
  {
    folderPath: 'dist/Voyages/Sardaigne2008/maxi/',
    jsonFilePath: 'dist/Voyages/Sardaigne2008/maxi/photos.json',
    filename: '/Voyages/Sardaigne2008/maxi/'
  },
  {
    folderPath: 'dist/Voyages/USA2008/maxi1/',
    jsonFilePath: 'dist/Voyages/USA2008/maxi1/photos.json',
    filename: '/Voyages/USA2008/maxi1/'
  },
  {
    folderPath: 'dist/Voyages/USA2008/maxi2/',
    jsonFilePath: 'dist/Voyages/USA2008/maxi2/photos.json',
    filename: '/Voyages/USA2008/maxi2/'
  },
  {
    folderPath: 'dist/Voyages/USA2008/maxi3/',
    jsonFilePath: 'dist/Voyages/USA2008/maxi3/photos.json',
    filename: '/Voyages/USA2008/maxi3/'
  },
  {
    folderPath: 'dist/Voyages/USA2008/maxi4/',
    jsonFilePath: 'dist/Voyages/USA2008/maxi4/photos.json',
    filename: '/Voyages/USA2008/maxi4/'
  },
  {
    folderPath: 'dist/Voyages/Nianing2008/maxi/',
    jsonFilePath: 'dist/Voyages/Nianing2008/maxi/photos.json',
    filename: '/Voyages/Nianing2008/maxi/'
  },
  {
    folderPath: 'dist/Voyages/Perou2009/maxi1/',
    jsonFilePath: 'dist/Voyages/Perou2009/maxi1/photos.json',
    filename: '/Voyages/Perou2009/maxi1/'
  },
  {
    folderPath: 'dist/Voyages/Perou2009/maxi2/',
    jsonFilePath: 'dist/Voyages/Perou2009/maxi2/photos.json',
    filename: '/Voyages/Perou2009/maxi2/'
  }, 
  {
    folderPath: 'dist/Voyages/Perou2009/maxi3/',
    jsonFilePath: 'dist/Voyages/Perou2009/maxi3/photos.json',
    filename: '/Voyages/Perou2009/maxi3/'
  },
  {
    folderPath: 'dist/Voyages/Nianing2009/maxi/',
    jsonFilePath: 'dist/Voyages/Nianing2009/maxi/photos.json',
    filename: '/Voyages/Nianing2009/maxi/'
  },
  {
    folderPath: 'dist/Voyages/Nianing2010/maxi/',
    jsonFilePath: 'dist/Voyages/Nianing2010/maxi/photos.json',
    filename: '/Voyages/Nianing2010/maxi/'
  },
  {
    folderPath: 'dist/Voyages/Nianing2011/maxi/',
    jsonFilePath: 'dist/Voyages/Nianing2011/maxi/photos.json',
    filename: '/Voyages/Nianing2011/maxi/'
  },
  {
    folderPath: 'dist/Voyages/Tanzanie2011/maxi1/',
    jsonFilePath: 'dist/Voyages/Tanzanie2011/maxi1/photos.json',
    filename: '/Voyages/Tanzanie2011/maxi1/'
  },
  {
    folderPath: 'dist/Voyages/Tanzanie2011/maxi2/',
    jsonFilePath: 'dist/Voyages/Tanzanie2011/maxi2/photos.json',
    filename: '/Voyages/Tanzanie2011/maxi2/'
  },
  {
    folderPath: 'dist/Voyages/Tanzanie2011/maxi3/',
    jsonFilePath: 'dist/Voyages/Tanzanie2011/maxi3/photos.json',
    filename: '/Voyages/Tanzanie2011/maxi3/'
  },
  {
    folderPath: 'dist/Voyages/RajaAmpat2014/maxi/',
    jsonFilePath: 'dist/Voyages/RajaAmpat2014/maxi/photos.json',
    filename: '/Voyages/RajaAmpat2014/maxi/'
  },
  {
    folderPath: 'dist/Voyages/Nianing2014/maxi/',
    jsonFilePath: 'dist/Voyages/Nianing2014/maxi/photos.json',
    filename: '/Voyages/Nianing2014/maxi/'
  },
  {
    folderPath: 'dist/Voyages/Palau2015/maxi1/',
    jsonFilePath: 'dist/Voyages/Palau2015/maxi1/photos.json',
    filename: '/Voyages/Palau2015/maxi1/'
  },
  {
    folderPath: 'dist/Voyages/Palau2015/maxi2/',
    jsonFilePath: 'dist/Voyages/Palau2015/maxi2/photos.json',
    filename: '/Voyages/Palau2015/maxi2/'
  },
  {
    folderPath: 'dist/Voyages/Oman2016/maxi1/',
    jsonFilePath: 'dist/Voyages/Oman2016/maxi1/photos.json',
    filename: '/Voyages/Oman2016/maxi1/'
  },
  {
    folderPath: 'dist/Voyages/Oman2016/maxi2/',
    jsonFilePath: 'dist/Voyages/Oman2016/maxi2/photos.json',
    filename: '/Voyages/Oman2016/maxi2/'
  },
  {
    folderPath: 'dist/Voyages/Oman2016/maxi3/',
    jsonFilePath: 'dist/Voyages/Oman2016/maxi3/photos.json',
    filename: '/Voyages/Oman2016/maxi3/'
  },
  {
    folderPath: 'dist/Voyages/Oman2016/maxi4/',
    jsonFilePath: 'dist/Voyages/Oman2016/maxi4/photos.json',
    filename: '/Voyages/Oman2016/maxi4/'
  },
  {
    folderPath: 'dist/Voyages/Oman2016/maxi5/',
    jsonFilePath: 'dist/Voyages/Oman2016/maxi5/photos.json',
    filename: '/Voyages/Oman2016/maxi5/'
  },
  {
    folderPath: 'dist/Voyages/Senegal2023/maxi/',
    jsonFilePath: 'dist/Voyages/Senegal2023/maxi/photos.json',
    filename: '/Voyages/Senegal2023/maxi/'
  },
  {
    folderPath: 'dist/Voyages/Maldives2010/maxi1/',
    jsonFilePath: 'dist/Voyages/Maldives2010/maxi1/photos.json',
    filename: '/Voyages/Maldives2010/maxi1/'
  },
  {
    folderPath: 'dist/Voyages/Maldives2010/maxi2/',
    jsonFilePath: 'dist/Voyages/Maldives2010/maxi2/photos.json',
    filename: '/Voyages/Maldives2010/maxi2/'
  },
  {
    folderPath: 'dist/Voyages/Maldives2010/maxi3/',
    jsonFilePath: 'dist/Voyages/Maldives2010/maxi3/photos.json',
    filename: '/Voyages/Maldives2010/maxi3/'
  },
  {
    folderPath: 'dist/Voyages/Jordanie2016/maxi1/',
    jsonFilePath: 'dist/Voyages/Jordanie2016/maxi1/photos.json',
    filename: '/Voyages/Jordanie2016/maxi1/'
  },
  {
    folderPath: 'dist/Voyages/Jordanie2016/maxi2/',
    jsonFilePath: 'dist/Voyages/Jordanie2016/maxi2/photos.json',
    filename: '/Voyages/Jordanie2016/maxi2/'
  },
  {
    folderPath: 'dist/Voyages/Jordanie2016/maxi3/',
    jsonFilePath: 'dist/Voyages/Jordanie2016/maxi3/photos.json',
    filename: '/Voyages/Jordanie2016/maxi3/'
  },
  {
    folderPath: 'dist/Voyages/Jordanie2016/maxi4/',
    jsonFilePath: 'dist/Voyages/Jordanie2016/maxi4/photos.json',
    filename: '/Voyages/Jordanie2016/maxi4/'
  },
  {
    folderPath: 'dist/Voyages/Jordanie2016/maxi5/',
    jsonFilePath: 'dist/Voyages/Jordanie2016/maxi5/photos.json',
    filename: '/Voyages/Jordanie2016/maxi5/'
  },
  {
    folderPath: 'dist/Voyages/Jordanie2016/maxi6/',
    jsonFilePath: 'dist/Voyages/Jordanie2016/maxi6/photos.json',
    filename: '/Voyages/Jordanie2016/maxi6/'
  },
  {
    folderPath: 'dist/Voyages/Jordanie2016/maxi7/',
    jsonFilePath: 'dist/Voyages/Jordanie2016/maxi7/photos.json',
    filename: '/Voyages/Jordanie2016/maxi7/'
  },
  {
    folderPath: 'dist/Voyages/Malaisie2010/maxi01/',
    jsonFilePath: 'dist/Voyages/Malaisie2010/maxi01/photos.json',
    filename: '/Voyages/Malaisie2010/maxi01/'
  },
  {
    folderPath: 'dist/Voyages/Malaisie2010/maxi02/',
    jsonFilePath: 'dist/Voyages/Malaisie2010/maxi02/photos.json',
    filename: '/Voyages/Malaisie2010/maxi02/'
  },
  {
    folderPath: 'dist/Voyages/Malaisie2010/maxi03/',
    jsonFilePath: 'dist/Voyages/Malaisie2010/maxi03/photos.json',
    filename: '/Voyages/Malaisie2010/maxi03/'
  },
  {
    folderPath: 'dist/Voyages/Malaisie2010/maxi04/',
    jsonFilePath: 'dist/Voyages/Malaisie2010/maxi04/photos.json',
    filename: '/Voyages/Malaisie2010/maxi04/'
  },
  {
    folderPath: 'dist/Voyages/Malaisie2010/maxi05/',
    jsonFilePath: 'dist/Voyages/Malaisie2010/maxi05/photos.json',
    filename: '/Voyages/Malaisie2010/maxi05/'
  },
  {
    folderPath: 'dist/Voyages/Malaisie2010/maxi06/',
    jsonFilePath: 'dist/Voyages/Malaisie2010/maxi06/photos.json',
    filename: '/Voyages/Malaisie2010/maxi06/'
  },
  {
    folderPath: 'dist/Voyages/Malaisie2010/maxi07/',
    jsonFilePath: 'dist/Voyages/Malaisie2010/maxi07/photos.json',
    filename: '/Voyages/Malaisie2010/maxi07/'
  },
  {
    folderPath: 'dist/Voyages/Malaisie2010/maxi08/',
    jsonFilePath: 'dist/Voyages/Malaisie2010/maxi08/photos.json',
    filename: '/Voyages/Malaisie2010/maxi08/'
  },
  {
    folderPath: 'dist/Voyages/Malaisie2010/maxi09/',
    jsonFilePath: 'dist/Voyages/Malaisie2010/maxi09/photos.json',
    filename: '/Voyages/Malaisie2010/maxi09/'
  },
  {
    folderPath: 'dist/Voyages/Malaisie2010/maxi10/',
    jsonFilePath: 'dist/Voyages/Malaisie2010/maxi10/photos.json',
    filename: '/Voyages/Malaisie2010/maxi10/'
  },
  {
    folderPath: 'dist/Voyages/Malaisie2010/maxi11/',
    jsonFilePath: 'dist/Voyages/Malaisie2010/maxi11/photos.json',
    filename: '/Voyages/Malaisie2010/maxi11/'
  },
  {
    folderPath: 'dist/Voyages/Birmanie2012/maxi/',
    jsonFilePath: 'dist/Voyages/Birmanie2012/maxi/photos.json',
    filename: '/Voyages/Birmanie2012/maxi/'
  },
  {
    folderPath: 'dist/Voyages/Equateur2013/maxi/',
    jsonFilePath: 'dist/Voyages/Equateur2013/maxi/photos.json',
    filename: '/Voyages/Equateur2013/maxi/'
  },
  {
    folderPath: 'dist/Voyages/Komodo2013/maxi/',
    jsonFilePath: 'dist/Voyages/Komodo2013/maxi/photos.json',
    filename: '/Voyages/Komodo2013/maxi/'
  },
  {
    folderPath: 'dist/Voyages/USA2015/maxi1/',
    jsonFilePath: 'dist/Voyages/USA2015/maxi1/photos.json',
    filename: '/Voyages/USA2015/maxi1/'
  },
  {
    folderPath: 'dist/Voyages/USA2015/maxi2/',
    jsonFilePath: 'dist/Voyages/USA2015/maxi2/photos.json',
    filename: '/Voyages/USA2015/maxi2/'
  },
  {
    folderPath: 'dist/Voyages/USA2015/maxi3/',
    jsonFilePath: 'dist/Voyages/USA2015/maxi3/photos.json',
    filename: '/Voyages/USA2015/maxi3/'
  },
  {
    folderPath: 'dist/Voyages/USA2015/maxi4/',
    jsonFilePath: 'dist/Voyages/USA2015/maxi4/photos.json',
    filename: '/Voyages/USA2015/maxi4/'
  },
  {
    folderPath: 'dist/Voyages/USA2015/maxi5/',
    jsonFilePath: 'dist/Voyages/USA2015/maxi5/photos.json',
    filename: '/Voyages/USA2015/maxi5/'
  },
  {
    folderPath: 'dist/Voyages/USA2015/maxi6/',
    jsonFilePath: 'dist/Voyages/USA2015/maxi6/photos.json',
    filename: '/Voyages/USA2015/maxi6/'
  },
  {
    folderPath: 'dist/Voyages/USA2015/maxi7/',
    jsonFilePath: 'dist/Voyages/USA2015/maxi7/photos.json',
    filename: '/Voyages/USA2015/maxi7/'
  },
  {
    folderPath: 'dist/Voyages/Maldives2018/maxi/',
    jsonFilePath: 'dist/Voyages/Maldives2018/maxi/photos.json',
    filename: '/Voyages/Maldives2018/maxi/'
  },
  {
    folderPath: 'dist/Voyages/Visayas2015/maxi1/',
    jsonFilePath: 'dist/Voyages/Visayas2015/maxi1/photos.json',
    filename: '/Voyages/Visayas2015/maxi1/'
  },
  {
    folderPath: 'dist/Voyages/Visayas2015/maxi2/',
    jsonFilePath: 'dist/Voyages/Visayas2015/maxi2/photos.json',
    filename: '/Voyages/Visayas2015/maxi2/'
  },
  {
    folderPath: 'dist/Voyages/Socorro2017/maxi1/',
    jsonFilePath: 'dist/Voyages/Socorro2017/maxi1/photos.json',
    filename: '/Voyages/Socorro2017/maxi1/'
  },
  {
    folderPath: 'dist/Voyages/Socorro2017/maxi2/',
    jsonFilePath: 'dist/Voyages/Socorro2017/maxi2/photos.json',
    filename: '/Voyages/Socorro2017/maxi2/'
  }
];

paths.forEach(_path => {
  console.log(_path);
  fs.readdir(_path.folderPath, (err, files) => {
  
    if (err) {
      console.error('Error reading the folder:', err);
      return;
    }
  
    const imageFiles = files.filter(file => {
      const fileExtension = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.gif'].includes(fileExtension);
    });
  
    // Generate paginated data
    const imagesPerPage = 8;
    const paginatedImages = [];
    let currentPage = 0;
    imageFiles.forEach((filename, index) => {
      if (index % imagesPerPage === 0) {
        currentPage++;
      }
      paginatedImages.push({
        filename: _path.filename + filename,
        page: currentPage
      });
    });
  
    // Construct JSON data with paginated images
    const jsonData = {
      images: paginatedImages
    };
  
    fs.writeFile(_path.jsonFilePath, JSON.stringify(jsonData, null, 2), err => {
      if (err) {
        console.error('Error writing JSON file:', err);
        return;
      }
      console.log('JSON file with paginated images list has been created successfully in ', _path.folderPath);
    });
  });
});