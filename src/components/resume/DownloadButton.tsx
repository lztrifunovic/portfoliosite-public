
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DownloadButton = () => {
  const handleDownload = () => {
    // For now, we'll create a simple link to a PDF file
    // In a real implementation, you might generate the PDF dynamically
    const link = document.createElement('a');
    link.href = '/logos/Lazar_Trifunovic_Resume.pdf';
    link.download = 'Lazar_Trifunovic_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex justify-center mb-8">
      <Button 
        onClick={handleDownload}
        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2"
      >
        <Download size={20} />
        Download PDF Resume
      </Button>
    </div>
  );
};

export default DownloadButton;
