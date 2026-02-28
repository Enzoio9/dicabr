import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Brain, 
  Zap,
  Palette,
  Layout,
  Loader2,
  Download,
  Play,
  Eye,
  Code,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import { initTensorFlow, loadWebsiteGenerationModel, generateWebsiteFromDescription, generateCompleteWebsiteHTML } from '@/lib/tfUtils';
import JSZip from 'jszip';

const GeneratorPage = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedSite, setGeneratedSite] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [modelLoaded, setModelLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Inicializar o modelo Transformers.js com GPT-2
  useEffect(() => {
    const loadModel = async () => {
      setStatus('Inicializando o motor de IA GPT-2...');
      setProgress(5);
      
      try {
        await initTensorFlow();
        setProgress(15);
        
        setStatus('Carregando modelo GPT-2...');
        // Carregando modelo GPT-2 para geração de websites
        const model = await loadWebsiteGenerationModel();
        
        setModelLoaded(true);
        setStatus('Motor de IA GPT-2 pronto!');
        setProgress(100);
      } catch (error) {
        console.error('Erro ao inicializar o modelo GPT-2:', error);
        setError('Falha ao carregar o modelo GPT-2. Verifique sua conexão com a internet e tente novamente.');
        setModelLoaded(false); // Não permitir uso se o modelo falhar ao carregar
        setStatus('Modelo não carregado');
        setProgress(100);
      }
    };
    
    loadModel();
  }, []);

  const generateWebsite = async () => {
    if (!prompt.trim()) {
      setError('Por favor, insira uma descrição do website');
      return;
    }
    
    if (!modelLoaded) {
      setError('O modelo GPT-2 ainda não está carregado. Aguarde antes de tentar gerar um website.');
      return;
    }
    
    setError(null);
    setIsLoading(true);
    setGeneratedSite(null);
    setProgress(0);
    
    try {
      // Etapas reais de processamento de IA usando modelos Transformers.js com GPT-2
      setStatus('Processando sua descrição com GPT-2...');
      setProgress(20);
      
      setStatus('Gerando código HTML...');
      setProgress(50);
      
      // Carregar o modelo de geração de websites (if not already loaded)
      const model = await loadWebsiteGenerationModel();
      setProgress(70);
      
      // Implementação real - usando modelo GPT-2 para gerar o HTML
      setStatus('Executando predição da IA...');
      setProgress(85);
      
      // Gerar o HTML com base na descrição usando o modelo GPT-2
      const generatedHtml = await generateWebsiteFromDescription(prompt, model);
      
      setGeneratedSite(generatedHtml);
      setProgress(100);
      setStatus('Website gerado com sucesso!');
    } catch (err) {
      console.error('Erro ao gerar website:', err);
      setError('Falha ao gerar website com o modelo GPT-2. Verifique sua conexão com a internet e tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };
  

  
  const downloadWebsite = () => {
    if (!generatedSite) return;
    
    const blob = new Blob([generatedSite], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'website-gerado.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  
  const downloadAsZip = async () => {
    if (!generatedSite) return;
    
    // Real implementation to create and download a ZIP archive
    const zip = new JSZip();
    
    // Add the main HTML file
    zip.file('index.html', generatedSite);
    
    // In a real implementation, we could add separate CSS and JS files
    // Extract and add CSS files if needed
    // Extract and add JS files if needed
    
    // Generate the zip file
    const content = await zip.generateAsync({ type: 'blob' });
    
    // Create download link
    const url = URL.createObjectURL(content);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'website-project.zip';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  
  const previewInNewTab = () => {
    if (!generatedSite) return;
    
    const blob = new Blob([generatedSite], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gerador de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Websites com IA</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descreva sua visão de website e deixe nossa IA criar um website bonito e responsivo em segundos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Section */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-blue-600" />
                  Descreva Seu Website
                </CardTitle>
                <CardDescription>
                  Nos diga que tipo de website você deseja criar
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="prompt">Descrição do Website</Label>
                    <Textarea
                      id="prompt"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="Descreva seu website (ex: 'Um website de portfólio moderno para um fotógrafo com seção de galeria e formulário de contato')"
                      rows={5}
                      disabled={isLoading}
                    />
                  </div>
                  
                  <Button 
                    onClick={generateWebsite} 
                    disabled={isLoading || !modelLoaded}
                    className="w-full"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Gerando...
                      </>
                    ) : (
                      <>
                        <Zap className="mr-2 h-4 w-4" />
                        Gerar Website
                      </>
                    )}
                  </Button>
                  
                  {error && (
                    <Alert variant="destructive" className="mt-4">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}
                  
                  {!modelLoaded && !error && (
                    <Alert className="mt-4">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>
                        O modelo está sendo carregado pela primeira vez. Isso pode levar alguns minutos e consumir dados de internet.
                      </AlertDescription>
                    </Alert>
                  )}
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Status:</span>
                      <span className="font-medium">{status || 'Pronto'}</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                    <div className="flex items-center text-sm text-gray-500">
                      <Brain className="h-4 w-4 mr-1" />
                      {modelLoaded ? (
                        <Badge variant="secondary" className="ml-1">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Motor de IA Carregado
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="ml-1">
                          <Loader2 className="h-3 w-3 mr-1 animate-spin" />
                          Carregando IA...
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Features */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Como Funciona</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Palette className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Descreva sua visão de website em linguagem simples</span>
                  </li>
                  <li className="flex items-start">
                    <Brain className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Desenvolvido com modelo via Transformers.js para geração avançada de IA</span>
                  </li>
                  <li className="flex items-start">
                    <Layout className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Nossa IA gera código HTML/CSS responsivo</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Visualize, personalize e baixe instantaneamente</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          {/* Preview Section */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-blue-600" />
                  Pré-visualização
                </CardTitle>
                <CardDescription>
                  Veja seu website gerado por IA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg overflow-hidden bg-white h-[500px] relative">
                  {isLoading && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-10">
                      <div className="text-center">
                        <Loader2 className="h-8 w-8 animate-spin mx-auto text-blue-600" />
                        <p className="mt-2 text-gray-600">Gerando seu website...</p>
                      </div>
                    </div>
                  )}
                  
                  {generatedSite ? (
                    <iframe
                      ref={iframeRef}
                      srcDoc={generatedSite}
                      className="w-full h-full"
                      title="Pré-visualização do Website Gerado"
                      sandbox="allow-scripts allow-same-origin"
                    />
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center p-8 text-gray-500">
                      <div className="mb-4 p-3 bg-blue-50 rounded-full">
                        <Play className="h-10 w-10 text-blue-500" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">Gerar um Website</h3>
                      <p>Seu website gerado por IA aparecerá aqui</p>
                    </div>
                  )}
                </div>
                
                {generatedSite && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Button onClick={previewInNewTab} variant="outline">
                      <Eye className="h-4 w-4 mr-2" />
                      Pré-visualizar em Aba
                    </Button>
                    <Button onClick={downloadWebsite}>
                      <Download className="h-4 w-4 mr-2" />
                      Baixar Arquivo HTML
                    </Button>
                    <Button onClick={downloadAsZip} variant="secondary">
                      <Download className="h-4 w-4 mr-2" />
                      Baixar Todos os Arquivos
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
            
            {/* Tips */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Dicas para Melhores Resultados</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Seja específico sobre o propósito e conteúdo do seu website</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Inclua detalhes sobre estilo e preferências de design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Especifique seções necessárias como galerias, formulários ou informações de contato</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Considere o público-alvo e caso de uso</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>O modelo irá gerar código HTML real baseado em sua descrição</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Baixe o arquivo HTML completo com todo o CSS e JS incluídos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratorPage;