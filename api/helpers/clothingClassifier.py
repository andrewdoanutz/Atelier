# TensorFlow and tf.keras
import tensorflow as tf

# Helper libraries
import numpy as np
from PIL import Image

#https://www.tensorflow.org/tutorials/keras/classification

class ClothingClassifier:
    classNames = ['T-shirt/top', 'Trouser', 'Pullover', 'Dress', 'Coat',
                    'Sandal', 'Shirt', 'Sneaker', 'Bag', 'Ankle boot']
    probModel = None

    def __init__(self):
        super().__init__()
        fashion_mnist = tf.keras.datasets.fashion_mnist

        (train_images, train_labels), (test_images, test_labels) = fashion_mnist.load_data()

        train_images = train_images / 255.0
        test_images = test_images / 255.0

        model = tf.keras.Sequential([
            tf.keras.layers.Flatten(input_shape=(28, 28)),
            tf.keras.layers.Dense(128, activation='relu'),
            tf.keras.layers.Dense(10)
        ])

        model.compile(optimizer='adam',
              loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
              metrics=['accuracy'])

        model.fit(train_images, train_labels, epochs=10)

        test_loss, test_acc = model.evaluate(test_images,  test_labels, verbose=2)

        print('\nTest accuracy:', test_acc)

        self.probModel = tf.keras.Sequential([model, 
                                         tf.keras.layers.Softmax()])
    
    def __formatImages(self, images):
        formattedImages = np.empty((len(images), 28, 28))
        for i, image in enumerate(images):
            openedImage = Image.open(image).convert('L')
            resizedImage = openedImage.resize((28, 28), Image.LANCZOS)
            formattedImages[i] = np.asarray(resizedImage) / 255.0
        return formattedImages 

    def predictImages(self, images):
        formattedImages = self.__formatImages(images)

        predictions = self.probModel.predict(formattedImages)
        labeledPredictions = []
        for prediction in predictions:
            labeledPredictions.append((self.classNames[np.argmax(prediction)], prediction[np.argmax(prediction)]))
            print("Predicted label: ", self.classNames[np.argmax(prediction)], ", Confidence: ", prediction[np.argmax(prediction)])
            print(prediction)
        return labeledPredictions

# images = ["/Users/andrew/Atelier/frontend/src/images/shirt7.jpeg", "/Users/andrew/Atelier/frontend/src/images/shoe2.jpeg"]
# classifier = ClothingClassifier()

# classifier.predictImages(images)